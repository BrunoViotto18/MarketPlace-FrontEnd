import { Component, Input, OnInit } from '@angular/core';
import { Product, Stock } from '../Classes';

@Component({
  selector: 'product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input()
  stock: Stock | undefined
  @Input()
  client: boolean = false

  product: Product | undefined

  constructor() { }

  ngOnInit(): void {
    this.product = this.stock?.product
  }

}
