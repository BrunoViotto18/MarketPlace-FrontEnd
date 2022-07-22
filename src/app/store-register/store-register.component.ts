import { Component, OnInit } from '@angular/core';
import { Store } from '../Classes';
import axios from 'axios';

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {

  placeholders = [
    'CNPJ',
    'Nome'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  storeRegister(){
    let cnpj = document.querySelector(`#${this.placeholders[0]}`) as HTMLInputElement
    let nome = document.querySelector(`#${this.placeholders[1]}`) as HTMLInputElement

    var data = JSON.stringify({
      "CNPJ" : cnpj.value,
      "name" : nome.value
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5164/Store/register',
      headers: {'Content-Type': 'application/json',"Authorization" : `Bearer ${localStorage.getItem('authToken')}`},
      data : data
    };

    var instance = this;
    axios(config)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
