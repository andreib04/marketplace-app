import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalService } from '../services/global.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  product: product = {} as product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private location: Location, public globalService: GlobalService, private cartService: CartService){
    let id: number = +this.route.snapshot.params['id'];

    this.productsService.getOneProduct(id).subscribe(async (res) => {
      this.product = res;
    })
  }

  addToCart(product: product){
    this.cartService.addToCart(product);
  }

  deleteProduct(){
    this.productsService.deleteProduct(this.product.id).subscribe(res =>{
      this.location.back();
    })
  }
}
