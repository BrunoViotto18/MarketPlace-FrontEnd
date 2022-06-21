import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  offset: number = 0

  constructor() { }

  ngOnInit(): void {
    let beforeButton = document.body.querySelector('.carrossel-before') as HTMLDivElement
    let carrosselContainer = document.body.querySelector('.carrossel-before + .carrossel-container') as HTMLDivElement
    let carrossel = document.body.querySelector('.carrossel-before + .carrossel-container > .carrossel') as HTMLDivElement
    let afterButton = document.body.querySelector('.carrossel-before + .carrossel-container + .carrossel-after') as HTMLDivElement

    if (this.offset <= carrosselContainer.offsetWidth - carrossel.offsetWidth)
      beforeButton.classList.toggle('hide-button')
      
    if (this.offset > 0)
      afterButton.classList.toggle('hide-button')
  }


  /* Right Button */

  moveCarrosselLeft(event: Event){
    let beforeButton = event.target as HTMLDivElement
    let carrosselContainer = document.body.querySelector('.carrossel-before + .carrossel-container') as HTMLDivElement
    let carrossel = document.body.querySelector('.carrossel-before + .carrossel-container > .carrossel') as HTMLDivElement
    let afterButton = document.body.querySelector('.carrossel-before + .carrossel-container + .carrossel-after') as HTMLDivElement

    this.offset -= carrosselContainer.offsetWidth * .9

    if (this.offset <= carrosselContainer.offsetWidth - carrossel.offsetWidth){
      this.offset = carrosselContainer.offsetWidth - carrossel.offsetWidth
      if (!beforeButton.classList.contains('hide-button'))
        beforeButton.classList.toggle('hide-button')
    }

    carrossel.style.transform = `translateX(${this.offset}px)`

    if (this.offset < 0 && afterButton.classList.contains('hide-button'))
      afterButton.classList.toggle('hide-button')
  }


  /* Left Button */

  moveCarrosselRight(event: Event){
    let afterButton = event.target as HTMLDivElement
    let carrosselContainer = document.body.querySelector('.carrossel-before + .carrossel-container') as HTMLDivElement
    let carrossel = document.body.querySelector('.carrossel-before + .carrossel-container > .carrossel') as HTMLDivElement
    let beforeButton = document.body.querySelector('.carrossel-before') as HTMLDivElement

    this.offset += carrosselContainer.offsetWidth * .9

    if (this.offset >= 0){
      this.offset = 0
      if (!afterButton.classList.contains('hide-button'))
      afterButton.classList.toggle('hide-button')
    }

    carrossel.style.transform = `translateX(${this.offset}px)`

    if (this.offset > carrosselContainer.offsetWidth - carrossel.offsetWidth && beforeButton.classList.contains('hide-button'))
      beforeButton.classList.toggle('hide-button')
  }

}
