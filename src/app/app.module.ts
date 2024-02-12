import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ProductComponent } from './components/product/product.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from './currencyConverter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductComponent,
    NewProductComponent,
    DeleteProductComponent,
    DetailsComponent,
    CurrencyConverterPipe,
  ],
  imports: [BrowserModule, HttpClientModule, routing, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
