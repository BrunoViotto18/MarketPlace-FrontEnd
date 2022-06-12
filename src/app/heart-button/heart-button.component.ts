import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: ['./heart-button.component.css']
})
export class HeartButtonComponent implements OnInit {

  @Input()
  productId: number | undefined

  constructor() { }

  ngOnInit(): void {
  }

  fillHeart(event: Event){
    let target = event.target as HTMLElement
    target.classList.toggle('heart-button-fill')
  }

}
