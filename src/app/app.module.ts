import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeartButtonComponent } from './heart-button/heart-button.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { AddressRegisterComponent } from './address-register/address-register.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StoreRegisterComponent } from './store-register/store-register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ProductComponentComponent } from './product-component/product-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsListComponent,
    ProductDetailComponent,
    HeartButtonComponent,
    CustomButtonComponent,
    AddressRegisterComponent,
    CustomInputComponent,
    ClientRegisterComponent,
    LoginFormComponent,
    StoreRegisterComponent,
    WishlistComponent,
    ProfileComponent,
    CarrosselComponent,
    ProductComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '',component:ProductsListComponent},
      {path: 'product/:productID', component:ProductDetailComponent},
      {path: 'address-register', component:AddressRegisterComponent},
      {path: 'client-register', component:ClientRegisterComponent},
      {path: 'store-register', component:StoreRegisterComponent},
      {path: 'login', component:LoginFormComponent},
      {path: 'wishlist', component:WishlistComponent},
      {path: 'profile/:clientID', component:WishlistComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
