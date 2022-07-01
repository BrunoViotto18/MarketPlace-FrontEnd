import { Component, OnInit } from '@angular/core'
import { Product, Stock } from '../Stock'
import axios from "axios"

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  stocks: Array<Stock> = []
  products: Array<Product> = []

  constructor() { }

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: 'http://localhost:5164/WishList/getClientWishlist',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    };

    let instance = this
    axios(config)
    .then(function (response) {
      instance.stocks = response.data.stocks
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
