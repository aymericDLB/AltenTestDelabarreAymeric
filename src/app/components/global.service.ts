import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from './models/productDto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //V1 Sans Backend
  //private fichierJson: string = '../../assets/products.json';

  //V2 Avec Backend
  private urlBackend: string = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(this.urlBackend + '/products');
  }

  getProductbyId(idProduct: number) {
    return this._http.get(this.urlBackend + '/product/' + idProduct);
  }

  createProduct(product: ProductDto) {
    return this._http.post<any>(this.urlBackend + '/products', product);
  }

  updateProduct(newProduct: ProductDto) {
    return this._http.put<any>(this.urlBackend + '/product/' + newProduct.id, newProduct);
  }

  deleteProduct(idProduct: number) {
    return this._http.delete<any>(this.urlBackend + '/product/' + idProduct);
  }

}
