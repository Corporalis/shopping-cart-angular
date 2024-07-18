import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { State } from '../../models/state';
import {
  addToCart,
  loadProducts,
} from '../../store/product/actions/product.actions';
import { selectAllProducts } from '../../store/product/selectors/product.selectors';
import { ProductsContainerModule } from './products.container.module';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ProductsContainerModule,
  ],
  template: `<app-products
    [products]="products$ | async"
    (addProductEvent)="addProductToCart($event)"
  />`,
})
export class ProductsContainerComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.products$ = this.store.select(selectAllProducts);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  addProductToCart(product: Product): void {
    console.log('product', product);
    this.store.dispatch(addToCart({ product }));
  }
}
