import { createSelector } from '@ngrx/store';
import { CartState } from '../../../models/cartState';
import { cartState } from '../reducers';

export const selectCartProducts = createSelector(
  cartState,
  (state: CartState) => state.cart
);
