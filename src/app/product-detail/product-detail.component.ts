import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Classes';
import axios from 'axios';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  titlePage="Product Detail"
  product: Product | undefined
  products: Array<Product> = []
  client: boolean = false
  stockId: Number = -1

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromroute = Number(routeParams.get('stockID'));

    this.stockId = productIdFromroute

    this.client = localStorage.getItem('client') == '1'
    
    var config = {
      method: 'get',
      url: 'http://localhost:5164/Product/all',
      headers: { },
    };
    
    var instance = this;
    axios(config)
    .then(function (response:any) {
      var products = response.data as Array<Product>;
      instance.product = products.find(p => p.id === productIdFromroute)
    })
    .catch(function (error:any) {
      console.log(error);
    });

    var config = {
      method: 'get',
      url: 'http://localhost:5164/Product/all',
      headers: { },
    };
    
    var instance = this;
    axios(config)
    .then(function (response:any) {
      instance.products = response.data;
      console.log(response.data);
    })
    .catch(function (error:any) {
      console.log(error);
    });
  }

  comprar(){

    let paymentType: Number | undefined

    const credito = document.querySelector('.radios > div > #credito') as HTMLInputElement
    const debito = document.querySelector('.radios > div > #debito') as HTMLInputElement
    const pix = document.querySelector('.radios > div > #pix') as HTMLInputElement
    const boleto = document.querySelector('.radios > div > #boleto') as HTMLInputElement

    if (credito.checked)
      paymentType = 0
    else if (debito.checked)
      paymentType = 1
    else if (pix.checked)
      paymentType = 2
    else if (boleto.checked)
      paymentType = 3

    if (paymentType === undefined)
      return

    let numbers = '01234567889'

    // get store & product
    let config = {
      method: 'get',
      url: `http://localhost:5164/Stock/info/${this.stockId}`,
      headers: { },
      data: ''
    };
    
    let loja = -1
    let product = -1
    axios(config)
    .then(function (response) {
      loja = response.data.loja
      product = response.data.product
    })
    .catch(function (error) {
      console.log(error);
      alert('falha na compra')
      return;
    });
    

    var data = JSON.stringify({
      "data_purchase": Date.now(),
      "purchase_value": this.product?.unit_price,
      "payment_type": paymentType,
      "purchase_status": 1,
      "confirmation_number": null,
      "number_nf": null,
      "storeId": loja,
      "clientId": null,
      "product": {
        "id": product
      }
    });
    
    config = {
      method: 'post',
      url: 'http://localhost:5164/Purchase/make',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      alert("Falha na compra")
    });
  }

}




