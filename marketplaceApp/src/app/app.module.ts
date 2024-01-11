import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user-page/user.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PencilFill, EnvelopeCheckFill, TrashFill } from 'ng-bootstrap-icons/icons'

const icons = {
  PencilFill,
  EnvelopeCheckFill,
  TrashFill
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    ProductPageComponent,
    AddProductPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CartComponent,
    EditProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
