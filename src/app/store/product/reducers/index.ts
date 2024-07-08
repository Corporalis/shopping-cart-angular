import { State } from '../../../models/state';

export * from './product.reducer';

export const productsState = (state: State) => state.products;
