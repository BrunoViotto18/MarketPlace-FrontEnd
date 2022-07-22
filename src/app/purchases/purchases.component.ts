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
      "url": "http://localhost:5164/Purchase/ownerPurchase",
      "method": "GET",
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem('authToken')}`
      },
    };

    var instance = this;
    axios(config)
    .then(function (response:any) {
      instance.purchases = response.data 
      console.log(instance.purchases)
    })
    .catch(function (error:any) {
      console.log(error);
    });
    
  }

  getImage(id :number){
  }

}
