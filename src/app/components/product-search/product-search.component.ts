// src/app/components/product-search/product-search.component.ts

import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../shared/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { addToCart } from '../../shared/actions/cart-action';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchTerm: string = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  confirmationMessage: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    // Charger les produits au moment de l'initialisation du composant
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  searchProducts() {
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = [];
      return;
    }

    // Filtrez les produits en fonction du terme de recherche
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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
  selector: 'app-produits',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
  providers: [CatalogService],
})
export class ProductSearchComponent implements OnInit {
  searchTerm: string = '';
  products$: Observable<Product []>;
  confirmationMessage: string = '';

  constructor(private catalogService: CatalogService, private store: Store) {
    this.products$ = this.catalogService.getProducts();
  }

  ngOnInit() {}

  addToCart(product$:Product) {
    this.store.dispatch(new addToCart(product$));
    this.confirmationMessage = `'${product$.name}' a été ajouté au panier.`;
    setTimeout(() => {
      this.confirmationMessage = '';
    }, 3000);
  }  
}

*/

