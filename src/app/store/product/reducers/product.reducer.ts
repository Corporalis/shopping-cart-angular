import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../../../models/productState';
import {
  loadProductsFailure,
  loadProductsSuccess,
} from '../actions/product.actions';

export const initialState: ProductState = {
  products: [],
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error }))
);
