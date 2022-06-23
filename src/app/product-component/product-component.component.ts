import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input()
  product: Product | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
