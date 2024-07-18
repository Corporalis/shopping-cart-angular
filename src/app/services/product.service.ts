import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://api.example.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    //return this.http.get<Product[]>(this.apiUrl);
    return of([
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
      { id: 4, name: 'Product 4', price: 400 },
      { id: 5, name: 'Product 5', price: 500 },
      { id: 6, name: 'Product 6', price: 600 },
    ]);
  }
}
