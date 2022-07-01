import { Component, OnInit } from '@angular/core';
import { Product } from '../Stock';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products: Array<Product> = []

  constructor() { }

  ngOnInit(): void {
  }

}
