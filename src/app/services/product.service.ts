import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bd } from '../classes/bd';

export interface ProductModel {
  id: number;
  image: string;
  title: string;
  price: number;
}

@Injectable()
export class ProductService {
  constructor() { }

  getAllProducts(): Observable<ProductModel[]> {
    return of(Bd.getAllBdProducts());
  }

  getProductById(id: number): Observable<ProductModel> {
    return of(Bd.getAllBdProducts().find((p: ProductModel) => p.id === id));
  }
}

