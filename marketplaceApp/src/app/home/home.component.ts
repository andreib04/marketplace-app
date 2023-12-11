import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: product[] = [
    {title: "titlu",
     description: "descriere",
     price: 15} as product
  ];

  isStarActive = false;

  toggleStar(){
    this.isStarActive = !this.isStarActive;
  }

  constructor(private productsService: ProductsService){
    this.productsService.getProducts().subscribe(async (res) => {       
      this.products = res;
    })
  }                       

}
