// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FormsModule } from '@angular/forms';
import { ShoppinCartComponent } from './components/shoppin-cart/shoppin-cart.component';
import { FilterPipe } from './catalog/filter.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
    declarations: [AppComponent, ProductSearchComponent, ShoppinCartComponent, ProductListComponent, FilterPipe],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
    
})
export class AppModule {}
