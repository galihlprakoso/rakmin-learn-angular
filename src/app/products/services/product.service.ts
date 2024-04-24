import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private isProductsLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isProductsLoading$: Observable<boolean> = this.isProductsLoading.asObservable()
  private products: BehaviorSubject<Product[]> = new BehaviorSubject([] as Product[])
  private products$: Observable<Product[]> = this.products.asObservable()

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.products$
  }

  getIsProductsLoading() {
    return this.isProductsLoading$
  }

  fetchProducts() {
    this.isProductsLoading.next(true)
    this.http.get<{products: Product[]}>(
      'https://dummyjson.com/products'
    ).pipe(
      map((data) => data.products)
    ).subscribe(data => {
      this.products.next(data)
      this.isProductsLoading.next(false)
    })
  }
}
