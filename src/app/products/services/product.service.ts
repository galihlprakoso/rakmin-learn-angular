import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: BehaviorSubject<Product[]> = new BehaviorSubject([] as Product[])
  private products$: Observable<Product[]> = this.products.asObservable()

  constructor(private http: HttpClient) {}

  fetchProducts() {
    this.http.get<{products: Product[]}>(
      'https://dummyjson.com/products'
    ).pipe(
      map((data) => data.products)
    ).subscribe(data => {
      this.products.next(data)
    })
  }
}
