import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Stock, Store,Product } from '../Classes';
import { StoreRegisterComponent } from '../store-register/store-register.component';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {
  placeholders = [
    'Nome',
    'Codigo',
    'Imagem',
    'Descrição',
    'Preço',
    'Quantidade'
  ]

  stores : Array<Store> = []
  selectedStoreId : number = 0

  constructor() { }

  ngOnInit(): void {
    this.getAllStores()
    
  }

  getAllStores(){

    var config = {
      method: 'get',
      url: 'http://localhost:5164/Store/getAllOwnerStores',
      headers: { 
        'Authorization' : 'Bearer '+localStorage.getItem('authToken')
      }
    };
    var instance = this
    axios(config)
    .then(function (response) {
      instance.stores = response.data
      console.log(instance.stores)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  productRegister(){
    if(this.selectedStoreId!=0){
      let nome = document.querySelector(`#${this.placeholders[0]}`) as HTMLInputElement
      let bar_code = document.querySelector(`#${this.placeholders[1]}`) as HTMLInputElement
      let image = document.querySelector(`#${this.placeholders[2]}`) as HTMLInputElement
      let description = document.querySelector(`#${this.placeholders[3]}`) as HTMLInputElement
      let productId  
      var data = JSON.stringify({
        "name": nome.value,
        "bar_code": bar_code.value,
        "image": image.value,
        "description": description.value
      });
  
      var config = {
        method: 'post',
        url: 'http://localhost:5164/Product/create',
        headers: {'Content-Type': 'application/json',"Authorization" : `Bearer ${localStorage.getItem('authToken')}`},
        data : data
      };
  
      var instance = this;
      axios(config)
      .then(function (response) {
        productId = response.data.id
        instance.stockRegister(productId)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      console.log("Faltou a loja")
    }

  }

  changeValue(nome:string,storeId: number){
    var drop = document.getElementById("dropdownMenuButton") as HTMLElement
    drop.textContent = nome;
    this.selectedStoreId = storeId
  }

  stockRegister(productId:number){
    
    let precoS = document.querySelector(`#${this.placeholders[4]}`) as HTMLInputElement
    var preco : number = +precoS.value
    console.log(precoS)
    let quantidadeS = document.querySelector(`#${this.placeholders[5]}`) as HTMLInputElement
    var quantidade : number = +quantidadeS.value
    
    var data = JSON.stringify({
      "quantity": quantidade,
      "unit_price": preco,
      "storeId": this.selectedStoreId,
      "productId": productId
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5164/Stock/addProduct',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
