import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

const appRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductComponent },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/products'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
