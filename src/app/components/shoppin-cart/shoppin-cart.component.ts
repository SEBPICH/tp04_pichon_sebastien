import { Select, Store } from '@ngxs/store'
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/shared/models/product.model';
import { removeFromCart } from 'src/app/shared/actions/cart-action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shoppin-cart',
  templateUrl: 'shoppin-cart.component.html',
  styleUrls: ['shoppin-cart.component.css']
})
export class ShoppinCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
  }

}
/*
@Component({
  selector: 'app-shoppin-cart',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.css']
})
export class ShoppinCartComponent implements OnInit {
  artItems: any[] = [];
  constructor(private store: Store) { }

  @Select(CartState.getProductList) list$!: Observable<Product[]>;

  ngOnInit() {}

  removeFromCart(p: Product): void {
    this.store.dispatch(new removeFromCart(p));
  }
}
}*/


