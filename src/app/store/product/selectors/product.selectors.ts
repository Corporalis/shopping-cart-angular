import { createSelector } from '@ngrx/store';
import { ProductState } from '../../../models/productState';
import { productsState } from '../reducers';

export const selectAllProducts = createSelector(
  productsState,
  (state: ProductState) => state?.products ?? []
);
