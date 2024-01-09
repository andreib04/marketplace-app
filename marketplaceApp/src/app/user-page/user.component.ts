import { Component } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  product: product = {} as product;
}
