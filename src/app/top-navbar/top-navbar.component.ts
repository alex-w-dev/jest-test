import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.sass']
})
export class TopNavbarComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
