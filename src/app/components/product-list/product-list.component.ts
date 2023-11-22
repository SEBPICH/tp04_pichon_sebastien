// src/app/components/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FilterPipe } from '../../catalog/filter.pipe';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../shared/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { CatalogService } from 'src/app/catalog/catalog.service';
import { addToCart } from '../../shared/actions/cart-action';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    confirmationMessage: string = '';

    

    constructor(private productService: ProductService, private cartService: CartService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.confirmationMessage = `'${product.name}' a été ajouté au panier.`;
        setTimeout(() => {
          this.confirmationMessage = '';
        }, 3000);
      }
}



/*
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [FilterPipe],
})
export class ProductListComponent implements OnInit {
    productList$: Observable<Product[]>;  // Utiliser le type Observable
    confirmationMessage: string = '';

    constructor(private catalogService: CatalogService, private store: Store) {
        this.productList$ = this.catalogService.getProducts();
    }

    ngOnInit(): void {}

    addToCart(product: Product) {
        this.store.dispatch(new addToCart(product));
        this.confirmationMessage = `'${product.name}' a été ajouté au panier.`;
        setTimeout(() => {
            this.confirmationMessage = '';
        }, 3000);
    }  
}
*/
