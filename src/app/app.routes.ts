import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsContainerComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
