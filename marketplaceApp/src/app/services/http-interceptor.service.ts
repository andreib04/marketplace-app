import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private globalService: GlobalService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;
    const isApiUrl = request.url.startsWith(this.globalService.baseURL);

    if(isLoggedIn && isApiUrl){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      });
    }

    return next.handle(request);
  }
}
