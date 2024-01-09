import { Component, Inject } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../services/global.service';
import { product } from '../models/product';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: User = {} as User;

  constructor(private offcanvasService: NgbOffcanvas, public globalService: GlobalService) {
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
}
