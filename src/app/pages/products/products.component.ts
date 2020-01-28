import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }

  addToCart(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
