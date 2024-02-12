import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL = 'http://localhost:3000/products/';
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(this.URL);
  }
  getById(id: number) {
    return this.httpClient.get(this.URL + id);
  }
  delete(id: number) {
    return this.httpClient.delete(this.URL + id);
  }
  post(model: Product) {
    return this.httpClient.post(this.URL, model);
  }
}
