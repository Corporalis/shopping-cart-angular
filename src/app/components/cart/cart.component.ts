import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() cart: Product[] | null = [];

  @Output()
  public removeProductEvent = new EventEmitter<number>();

  removeProduct(productId: number): void {
    this.removeProductEvent.emit(productId);
  }
}
