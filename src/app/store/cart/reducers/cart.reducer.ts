import { createReducer, on } from '@ngrx/store';
import { CartState } from '../../../models/cartState';
import {
  addToCart,
  removeFromCart,
} from '../../product/actions/product.actions';

export const initialState: CartState = {
  cart: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    cart: [...state.cart, product],
  })),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    cart: state.cart.filter((product) => product.id !== productId),
  }))
);
