import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { addToCart, removeFromCart } from '../actions/cart-action';
import { CartStateModel } from './cart-state-model';
import { Product } from '../models/product.model';
@State<CartStateModel>({
  name: 'produits',
  defaults: {
    products: [],
  },
})
@Injectable()
export class CartState {
  @Selector()
  static getProductsNumber(state: CartStateModel) {
    return state.products??[].length;
  }

  @Selector()
  static getProductList(state: CartStateModel) {
    return state.products;
  }

  @Action(addToCart)
  add(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: addToCart
  ) {
    const state = getState();
    patchState({
        products: [...state.products??[], payload],
    });
  }

  @Action(removeFromCart)
  del(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: removeFromCart
  ) {
    const state = getState();
    console.log("State");


    patchState({
        products: (state.products??[]).filter(
        (x:Product) => !(payload.name == x.name)

      ),
    });
  }
}
