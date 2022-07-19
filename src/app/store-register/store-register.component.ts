import { Component, OnInit } from '@angular/core';
import { Store } from '../Classes';

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

}
