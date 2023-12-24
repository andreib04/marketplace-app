import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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
