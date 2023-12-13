import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseURL: string = "https://localhost:7141/";
  apiPath: string = "api/Products";

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<product[]>{
    return this.httpClient.get<product[]>(`${this.baseURL}${this.apiPath}`);
  }

  getOneProduct(id: number): Observable<product>{
    return this.httpClient.get<product>(`${this.baseURL}${this.apiPath}/${id}`);
  }

  postProduct(product: product): Observable<product>{
    return this.httpClient.post<product>(`${this.baseURL}${this.apiPath}`, product);
  }

  editProduct(id:number, product: product): Observable<product>{
    return this.httpClient.put<product>(`${this.baseURL}${this.apiPath}`, product);
  }

  deleteProduct(id: number): Observable<product>{
    return this.httpClient.delete<product>(`${this.baseURL}${this.apiPath}/${id}`)
  }
}
