import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  product: product = {} as product;
  items = this.cartService.getItems();

  clear(){
    this.cartService.clearCart();
    this.items = [];
  }

  constructor(private cartService: CartService) {}
}
