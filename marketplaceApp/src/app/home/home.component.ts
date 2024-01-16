import { Component} from '@angular/core';
import { product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  filteredProducts: product[] = [];
  searchTerm: string = '';

  products: product[] = [
    {
        id: 1,
        title: "titlu",
        description: "descriere",
        price: 15
    } as product
  ];

  constructor(private productsService: ProductsService, private cartService: CartService){
      this.productsService.getProducts().subscribe((products) => {
        this.products = products;
        this.filteredProducts = products;
      });
  }       
  
  addToCart(product: product){
    this.cartService.addToCart(product);
  }

  onSearch(): void {
    if(this.searchTerm.trim() === ''){
      this.filteredProducts = this.products;
    }else{
      this.filteredProducts = this.products.filter((product) => 
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  onKeyPress(event: KeyboardEvent): void{
    if(event.key === 'Enter'){
      this.onSearch();
    }
  }

}
