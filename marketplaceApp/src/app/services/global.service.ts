import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseURL: string = "https://localhost:7196/";
  isLoggedIn = false;

  constructor() { }

  setLogIn(isLoggedIn: boolean){
    this.isLoggedIn = isLoggedIn;
  }
}
