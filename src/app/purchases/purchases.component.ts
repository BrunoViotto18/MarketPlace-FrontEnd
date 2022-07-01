import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var a = document.getElementById('total')
    var purch = document.getElementById('Compra')

    if(purch != null){
      purch.textContent = 'Compra Nº 12345'
    }
    if(a != null){
      a.textContent = a.textContent +'6,799.90'
    }
  }

}
