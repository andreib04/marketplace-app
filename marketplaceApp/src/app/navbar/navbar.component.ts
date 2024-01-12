import { Component, Inject, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../services/global.service';
import { User } from '../models/user';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartItemCounter: number = 0;

  user: User = {} as User;

  constructor(private offcanvasService: NgbOffcanvas, public globalService: GlobalService, private cartService: CartService) {
    if(localStorage.getItem('token')){
      this.globalService.setLogIn(true);
    }
  }

  open(content: any) {
		this.offcanvasService.open(content).result.then();
	}

  logout(){
    localStorage.removeItem('token');
    this.globalService.setLogIn(false);
  }

  ngOnInit(): void {
    this.cartService.getItemsObservable().subscribe((items) => {
      this.cartItemCounter = items.length;
    });
  }
}
