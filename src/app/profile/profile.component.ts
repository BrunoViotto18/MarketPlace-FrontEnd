import { Component, OnInit } from '@angular/core';
import { Usuario,Address } from '../Classes';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editPersonal : boolean = false
  editAddress : boolean = false
  
  endereco : Address = {street: 'Pedro Gusso 870',
    city: 'Curitiba',
    state: 'Paraná',
    country: 'Brazil',
    postal_code: "81050120"}

  usuario : Usuario = {id: 1,
    name: 'Nathan',
    dateOfBirth: new Date("2003-01-16"),
    document: '10783211910',
    email: 'nathan.ansayc@gmail.com',
    phone: '41995466312',
    passwd: 'nanathan147', 
    login: 'nates1803',
    address : this.endereco}

  constructor() { }

  ngOnInit(): void {
    this.disableInputs('address')
    this.disableInputs('personal')


  }

  disableInputs(name:string){
    //Desabilita todos os inputs
    var inputs = document.querySelectorAll("input")
    for(var i = 0; i< inputs.length; i++){
      if(inputs[i].name == name)
           inputs[i].disabled =  true
    }
  }


  allowEdit(name :string) {
    var inputs = document.querySelectorAll("input")
  
    for(var i = 0; i< inputs.length; i++){
      if(inputs[i].name == name)
           inputs[i].disabled =  false
    }
    if(name == 'address')
      this.editAddress = true
    if(name == 'personal')
      this.editPersonal = true
    
  }

  saveEdits(name :string){
    if(name == 'address'){
    this.editAddress = false}
    if(name == 'personal')
      this.editPersonal = false
    
      this.disableInputs(name)
    
  }

  

 }


