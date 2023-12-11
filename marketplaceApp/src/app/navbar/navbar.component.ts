import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
		this.offcanvasService.open(content).result.then();
	}
}
