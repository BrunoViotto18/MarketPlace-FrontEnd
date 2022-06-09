import { Token } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input()
  titulo = ""

  logged : boolean = false


  constructor() { }

  ngOnInit(): void {
    let token = localStorage.getItem("authToken")
    if (token != undefined && token != "" ){
      this.logged = true
    }

  }
  LogOut(){
    localStorage.setItem("authToken", "")
    this.reloadCurrentPage()
  }

  reloadCurrentPage() {
    window.location.reload();
   }
}
