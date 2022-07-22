import { Component, OnInit } from '@angular/core';
import { Purchase } from '../Classes';
import axios from 'axios';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  purchases : Array<Purchase> = []


  constructor() { }

  ngOnInit(): void {  

    var config = {
      "url": "http://localhost:5164/Purchase/clientPurchase",
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
