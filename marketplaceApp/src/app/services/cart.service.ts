import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: product[] = [];
  private cartItems = new Subject<any[]>();

  addToCart(product: any): void{
    this.items.push(product);
    this.cartItems.next(this.items.concat());
  }

  getItems(){
    return this.items;
  }

  getItemsObservable(){
    return this.cartItems.asObservable();
  }

  clearCart(){
    this.items = [];
  }

  constructor() { }
}
