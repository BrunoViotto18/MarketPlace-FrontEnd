import { Component, OnInit } from '@angular/core';
import { Purchase, Stock } from '../Classes';
@Component({
  selector: 'app-puchase-detail',
  templateUrl: './puchase-detail.component.html',
  styleUrls: ['./puchase-detail.component.css']
})
export class PuchaseDetailComponent implements OnInit {

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
