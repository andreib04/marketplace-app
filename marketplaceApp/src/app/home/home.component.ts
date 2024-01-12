import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: product[] = [
    {
        id: 1,
        title: "titlu",
        description: "descriere",
        price: 15
    } as product
  ];

  constructor(private productsService: ProductsService, private cartService: CartService){
    this.productsService.getProducts().subscribe(async (res) => {       
      this.products = res;
    })
  }       
  
  addToCart(product: product){
    this.cartService.addToCart(product);
  }

}
