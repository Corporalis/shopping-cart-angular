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
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Description 1',
      },
    ]);
  }
}
