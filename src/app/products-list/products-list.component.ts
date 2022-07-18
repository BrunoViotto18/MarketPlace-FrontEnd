import { Component, OnInit } from '@angular/core';
import { Stock,Product } from '../Stock';
import axios from "axios";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  stocks: Array<Stock> = [];
  constructor() { }

  ngOnInit(): void {
    
    var config = {
      method: 'get',
      url: 'http://localhost:5164/Stock/allWithProducts',
      headers: { },
    };
    
    var instance = this;
    axios(config)
    .then(function (response:any) {
      instance.stocks = response.data;
      console.log(response.data);
    })
    .catch(function (error:any) {
      console.log(error);
    });
  }
}


