import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from './models/productDto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private fichierJson: string = '../../assets/products.json';

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(this.fichierJson);
  }

  getProductbyId(idProduct: number) {
    return this._http.get('URL API'+ idProduct);
  }

  createProduct(product: ProductDto) {
    return this._http.post<any>('URL API', product);
  }

  updateProduct(newProduct: ProductDto) {
    return this._http.put<any>('URL API' + newProduct.id, newProduct);
  }

  deleteProduct(idProduct: number) {
    return this._http.delete<any>('URL API' + idProduct);
  }


}
