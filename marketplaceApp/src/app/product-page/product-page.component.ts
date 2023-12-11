import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  product: product = {} as product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute){
    let id: number = +route.snapshot.params['id'];

    this.productsService.getOneProduct(id).subscribe(async (res) => {
      this.product = res;
    })
  }
}
