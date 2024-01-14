import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { UserLogin } from '../models/userLogin';
import { Token } from '../models/token';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private loginService: LoginServiceService, private router: Router, private service: GlobalService) {}

  login(){
    if(this.form.valid){
      let userLogin: UserLogin = {
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value,
      }

      this.loginService.login(userLogin).subscribe((res: Token) => {
        localStorage.setItem("token", res.token)
        console.log(res);
      })
      this.service.setLogIn(true);
      this.router.navigate(['/']);
    }
  }
}
