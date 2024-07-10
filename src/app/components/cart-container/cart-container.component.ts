import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { State } from '../../models/state';
import { selectCartProducts } from '../../store/cart/selectors/cart.selectors';
import { removeFromCart } from '../../store/product/actions/product.actions';
import { CartModule } from '../cart/cart.module';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CartModule,
  ],
  template: `<app-cart
    [cart]="cart$ | async"
    (removeProductEvent)="removeProductFromCart($event)"
  />`,
})
export class CartContainerComponent {
  cart$: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.cart$ = this.store.select(selectCartProducts);
  }

  removeProductFromCart(productId: number): void {
    this.store.dispatch(removeFromCart({ productId }));
  }
}
