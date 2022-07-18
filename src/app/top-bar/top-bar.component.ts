import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  host: {
    '(document: click)': 'onClick($event)'
  }
})
export class TopBarComponent implements OnInit {
  @Input()
  titulo = ""

  logged : boolean = false


  constructor() { }

  ngOnInit(): void {
    let token = localStorage.getItem("authToken")
    console.log(token)
    
    if (token != undefined && token != "" ){
      console.log("Nathan")
      this.logged = true
    }
  }

  showNavigationLinks(){
    let nav = document.querySelector('.top-bar__navigation') as HTMLElement
    nav.classList.toggle('show-navigation')
  }

  hideNavigationLinks(){
    let nav = document.querySelector('.top-bar__navigation') as HTMLElement
    if (nav.classList.contains('show-navigation'))
      nav.classList.toggle('show-navigation')
  }

  // onClick(event: Event){
  //   let target = event.target as HTMLElement
  //   let nav = document.querySelector('.top-bar__navigation') as HTMLElement
  //   let userIcon = document.querySelector('.top-bar__user-icon') as HTMLElement

  //   if (target == userIcon && !nav.classList.contains('show-navigation'))
  //     this.showNavigationLinks()
  //   else if (target != nav && target != userIcon && nav.classList.contains('show-navigation'))
  //     this.hideNavigationLinks()
  //   //document.body.style.backgroundColor = '#ff0000'
  // }

  LogOut(){
    localStorage.setItem("authToken", "")
    this.reloadCurrentPage()
  }

  reloadCurrentPage() {
    window.location.reload();
   }
}
