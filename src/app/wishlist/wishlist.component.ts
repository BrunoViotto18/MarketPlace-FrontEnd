import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products = [
    'a',
    'b',
    'c'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
