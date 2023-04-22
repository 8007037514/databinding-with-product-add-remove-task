import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productcomponent } from './shared/product/product.component';
import { ProductsComponent } from './shared/product/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    productcomponent,
    productcomponent,
    ProductsComponent,

    
   
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
