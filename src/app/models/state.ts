import { CartState } from './cartState';
import { ProductState } from './productState';

export interface State {
  products: ProductState;
  cart: CartState;
}
