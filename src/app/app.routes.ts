import { Routes } from '@angular/router';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsContainerComponent,
  },
  {
    path: 'cart',
    component: CartContainerComponent,
  },
];
