import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from '../../models/state';
import { cartReducer } from '../cart/reducers/cart.reducer';
import { productReducer } from '../product/reducers/product.reducer';

export const metaReducers: MetaReducer<State>[] = [];

export const reducers: ActionReducerMap<State> = {
  products: productReducer,
  cart: cartReducer,
};
