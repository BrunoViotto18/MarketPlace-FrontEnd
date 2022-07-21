import { Component, OnInit } from '@angular/core';
import { Usuario,Address } from '../Classes';
import axios from 'axios';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editPersonal : boolean = false
  editAddress : boolean = false
  

  endereco : Address = {street: 'Rua',
    city: 'Cidade',
    state: 'Estado',
    country: 'Pais',
    postal_code: "0000000000"}

  usuario : Usuario = {id: 1,
    name: 'Nome',
    dateOfBirth: new Date("1900-01-01"),
    document: '11111111111',
    email: 'email@email.com',
    phone: '999999999999',
    passwd: 'password', 
    login: 'user',
    address : this.endereco}

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('authToken'));
    var config = {
      method: 'get',
      url: 'http://localhost:5164/Client/informations',
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem('authToken')}`
      },
    };

    var instance = this
    axios(config)
      .then(function (response) {

        instance.usuario = response.data
        const date = new Date(instance.usuario.dateOfBirth.toString())
        instance.usuario.dateOfBirth = date
      })
      .catch(function (error) {
        console.log(error);
      });

    this.disableInputs('address')
    this.disableInputs('personal')
    this.usuario.dateOfBirth.toDateString()
    
    

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


