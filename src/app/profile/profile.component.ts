import { Component, OnInit } from '@angular/core';
// import { Usuario } from '../Usuario';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // usuario : Usuario | undefined

  constructor() { }

  ngOnInit(): void {

    //Desabilita todos os inputs
    var inputs = document.querySelectorAll("input")
    
    for(var i = 0; i< inputs.length; i++){
      if(inputs[i].id == "nome"){
        inputs[i].value = "Nathan Ansay Cordeiro"
      }
      
      inputs[i].disabled =  true;
    }


  }

 }


