import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { UserComponent } from './user/user.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'user', component: UserComponent },
  { path: 'add-product', component: AddProductPageComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component:RegisterPageComponent },

  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
