import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Purchase } from '../Classes';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {

  purchase : Purchase | undefined
  purchases : Array<Purchase> = []
  paymentTypes: Array<string> = ['Crédito', 'Débito', 'Pix', 'Boleto']
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('authToken')?.length == 0)
      this.router.navigate(['/login'])

    const routeParams = this.route.snapshot.paramMap;
    const purchaseIdFromroute = Number(routeParams.get('saleID'));

    var config = {
      "url": "http://localhost:5164/Purchase/ownerPurchase",
      "method": "GET",
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem('authToken')}`
      },
    };
    var instance = this
    axios(config)
    .then(function (response:any) {
      instance.purchases = response.data
      instance.purchase = instance.purchases.find(p=> p.id === purchaseIdFromroute)
      console.log(instance.purchase)
    })
    .catch(function (error:any) {
      console.log(error);
    });
  }

}
