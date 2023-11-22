import { Product } from '../models/product.model';


export class  addToCart {
    static readonly type = '[Product] Add';
    constructor(public payload: Product) {}
  }

export class  removeFromCart {
    static readonly type = '[Product] Del';
    constructor(public payload: Product) {}
  }

