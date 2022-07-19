import { Component, OnInit } from '@angular/core';
import { Stock,Product,Purchase } from '../Classes';
import axios from "axios";

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases : Array<Purchase> = []


  constructor() { }

  ngOnInit(): void {

    var config = {
      "url": "http://localhost:5164/Purchase/clientPurchase/1",
      "method": "GET",
      "timeout": 0,
    };

    var instance = this;
    axios(config)
    .then(function (response:any) {
      instance.purchases = response.data
      console.log(response.data);
    })
    .catch(function (error:any) {
      console.log(error);
    });

  }

}
