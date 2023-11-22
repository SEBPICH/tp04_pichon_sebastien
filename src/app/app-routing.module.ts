// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ShoppinCartComponent } from './components/shoppin-cart/shoppin-cart.component';

const routes: Routes = [
    { path: 'catalog', component: ProductListComponent },
    { path: 'search', component: ProductSearchComponent },
    { path: 'cart', component: ShoppinCartComponent },
    { path: '', redirectTo: '/catalog', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
