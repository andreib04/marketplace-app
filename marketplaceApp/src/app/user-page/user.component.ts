import { Component } from '@angular/core';
import { product } from '../models/product';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user: User = {} as User;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    let id: number = +route.snapshot.params['id'];

    this.usersService.getOneUser(id).subscribe( res => {
      this.user = res;
    })
  }
}
