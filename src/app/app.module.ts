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
import { PurchasesComponent } from './purchases/purchases.component';
import { PuchaseDetailComponent } from './puchase-detail/puchase-detail.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { SalesComponent } from './sales/sales.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';


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
    ProductComponentComponent,
    PurchasesComponent,
    PuchaseDetailComponent,
    CadastroFormComponent,
    SalesComponent,
    ProductRegisterComponent,
    SaleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '',component:ProductsListComponent},
      {path: 'product/:stockID', component:ProductDetailComponent},
      {path: 'address-register', component:AddressRegisterComponent},
      {path: 'client-register', component:ClientRegisterComponent},
      {path: 'store-register', component:StoreRegisterComponent},
      {path: 'login', component:LoginFormComponent},
      {path: 'wishlist', component:WishlistComponent},
      {path: 'profile', component:ProfileComponent},
      {path: 'purchases', component:PurchasesComponent},
      {path: 'purchase/:purchaseID', component:PuchaseDetailComponent},
      {path: 'sales', component:SalesComponent},
      {path: 'sale/:saleID', component:SaleDetailComponent},
      {path: 'product-register', component:ProductRegisterComponent},
      {path: 'cadastro', component:CadastroFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
