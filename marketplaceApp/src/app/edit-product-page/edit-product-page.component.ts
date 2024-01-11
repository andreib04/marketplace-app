import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { product } from '../models/product';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent {
  product: product = {} as product;

  form: FormGroup = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required, Validators.minLength(15)]),
    price: new FormControl<number>(0, [Validators.required]),
  });

  constructor(private productsService: ProductsService) {
    this.productsService.getOneProduct(this.product.id).subscribe(res =>{
      this.product.authorId = res.authorId;
      this.form.controls['title'].setValue(res.title);
      this.form.controls['description'].setValue(res.description);
      this.form.controls['price'].setValue(res.price);
    })
  }

  editArticle(){
    if(this.form.valid){
      this.product = {
        id: this.product.id,
        authorId: this.product.authorId,
        title: this.form.controls['title'].value,
        description: this.form.controls['description'].value,
        price: this.form.controls['price'].value,
      } as product;

      this.productsService.editProduct(this.product.id, this.product).subscribe(res =>{
        console.log(res);
      })
    }
  }
}
