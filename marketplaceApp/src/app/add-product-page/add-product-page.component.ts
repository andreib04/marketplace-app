import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent {
  form: FormGroup = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, [Validators.required]),
  });

  constructor(private productsService: ProductsService, private router: Router) {}

  createProduct(){
    if(this.form.valid){
      let product: product = {
        title: this.form.controls['title'].value,
        description: this.form.controls['description'].value,
        price: this.form.controls['price'].value
      } as product;

      this.productsService.postProduct(product).subscribe(res => {
        console.log(res);
        this.router.navigate(['product', res.id]);
      })
    }
  }
}
