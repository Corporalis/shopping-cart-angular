import { State } from '../../../models/state';

export * from './cart.reducer';

export const cartState = (state: State) => state.cart;
