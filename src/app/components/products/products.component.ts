import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] | null = [];

  @Output()
  public addProductEvent = new EventEmitter<Product>();

  ngOnInit(): void {}

  addProduct(product: Product): void {
    this.addProductEvent.emit(product);
  }
}
