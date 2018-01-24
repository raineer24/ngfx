import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "../models/product";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  url = "/api/products";
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }
  getProductById(id: string): Observable<Product[]> {
    console.log(id);
    return this.http.get<Product[]>(this.url + '?id=' + id);
  }
}

