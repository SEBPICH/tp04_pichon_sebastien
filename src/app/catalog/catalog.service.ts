import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bakcend } from './backend';
@Injectable()
export class CatalogService {
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(bakcend.backendProduct);
  }
}