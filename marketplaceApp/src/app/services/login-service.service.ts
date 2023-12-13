import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/userLogin';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseURL: string = "https://localhost:7196/";
  apiPath: string = "api/Login";

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<Token>{
    return this.httpClient.post<Token>(`${this.baseURL}${this.apiPath}`, userLogin);
  }
}
