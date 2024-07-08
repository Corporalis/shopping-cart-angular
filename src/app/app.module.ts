import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartComponent } from './components/cart/cart.component';
import { ProductEffects } from './store/product/effects/product.effects';
import { metaReducers, reducers } from './store/reducers';

@NgModule({
  declarations: [CartComponent],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    RouterOutlet,
  ],
  providers: [provideEffects([ProductEffects])],
  bootstrap: [],
})
export class AppModule {}
