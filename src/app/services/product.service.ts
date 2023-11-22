// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = '../assets/products.json'; // URL du backend (à adapter)

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl);
    }
}
