import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import axios from "axios";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  products = products;
  constructor() { }

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: 'http://localhost:5164/Product/all',
      headers: { },
    };
    
    var instance = this;
    axios(config)
    .then(function (response:any) {
      instance.products = response.data;
    })
    .catch(function (error:any) {
      console.log(error);
    });
  }
}
