import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product';

export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: number }>()
);
