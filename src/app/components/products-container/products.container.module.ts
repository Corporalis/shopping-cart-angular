import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class ProductsContainerModule {}
