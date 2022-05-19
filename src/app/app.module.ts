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


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsListComponent,
    ProductDetailComponent,
    HeartButtonComponent,
    CustomButtonComponent,
    AddressRegisterComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '',component:ProductsListComponent},
      {path: 'product/:productID', component:ProductDetailComponent},
      {path: 'address-register', component:AddressRegisterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
