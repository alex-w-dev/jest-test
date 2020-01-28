import { Injectable } from '@angular/core';
import { ProductModel } from './product.service';

export interface CartProduct {
  product: ProductModel;
  count: number;
}

@Injectable()
export class CartService {

  products: CartProduct[] = [];
  totalCount: number;

  constructor() {
    this.totalCount = 0;
  }

  addProduct(product: ProductModel) {
    const cartProduct =  this.products.find(p => p.product === product) || this.products[this.products.push({ product, count: 0 }) - 1];
    cartProduct.count++;
    this._renewStats();
  }

  private _renewStats() {
    this.totalCount = this.products.reduce((accum, product) => product.count + accum, 0);
  }
}
