import { Component, Inject, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../services/global.service';
import { User } from '../models/user';
import { CartService } from '../services/cart.service';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartItemCounter: number = 0;
  user: User = {} as User;

  constructor(public globalService: GlobalService,
     private cartService: CartService, private usersService: UsersService) {
    if(localStorage.getItem('token')){
      this.globalService.setLogIn(true);
    }
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
