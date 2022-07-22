import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  @Input()
  label = ''
  labelView = ''
  @Input()
  type = 'text'
  @Input()
  required = true

  constructor() { }

  ngOnInit(): void {
    this.labelView = this.label
    while (this.label.indexOf(' ') != -1 || this.label.indexOf('/') != -1){
      this.label = this.label.replace(' ', '_').replace('/', '_')
    }
  }

  inputFocus(event: Event){
    let target = event.target as HTMLInputElement
    let label = document.querySelector(`#${target.id}+label`) as HTMLLabelElement

    if (!label.classList.contains('custom-input-focus')){
      label.classList.toggle('custom-input-focus')
    }
  }

  inputBlur(event: Event){
    let target = event.target as HTMLInputElement
    let label = document.querySelector(`#${target.id}+label`) as HTMLLabelElement

    if (target.value.length == 0){
      label.classList.toggle('custom-input-focus')
    }
  }

}
