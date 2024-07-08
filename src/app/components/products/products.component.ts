import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<State>) {
    this.products$ = this.store.select(selectAllProducts);
    console.log('products', this.products$);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  addProductToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
  }
}
