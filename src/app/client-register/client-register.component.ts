import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  placeholdersClient = [
    'Nome',
    'Telefone',
    'E-mail',
    'Login',
    'Data de Nascimento',
    'Senha',
    'Documento',
  ]
  placeholdersAddress = [
    "Rua",
    "Código Postal",
    "Estado",
    "Cidade",
    "País"
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {


  }
    save(){
    let name = document.getElementById("Nome") as HTMLInputElement;
    let phone = document.getElementById("Telefone") as HTMLInputElement;
    let documento = document.getElementById("Documento") as HTMLInputElement;
    let email = document.getElementById("E-mail") as HTMLInputElement;
    let login = document.getElementById("Login") as HTMLInputElement;
    let passwd = document.getElementById("Senha") as HTMLInputElement;
    let date_of_birth = document.getElementById("Data de Nascimento") as HTMLInputElement;

    let street =document.getElementById("Rua") as HTMLInputElement;
    let state =document.getElementById("Estado") as HTMLInputElement;
    let city =document.getElementById("Cidade") as HTMLInputElement;
    let country =document.getElementById("País") as HTMLInputElement;
    let postal_code =document.getElementById("Código Postal") as HTMLInputElement;
    



    var data = JSON.stringify({
      "name" : name?.value,
      "date_of_birth" : date_of_birth?.value,
      "document" : documento?.value,
      "phone" : phone?.value,
      "login" : login?.value,
      "email" : email?.value,
      "passwd" : passwd?.value,
      "address" : {
        "street" : street?.value,
        "state" : state?.value,
        "city" : city?.value,
        "country" : country?.value,
        "postal_code" : postal_code?.value

        }
      })

    let self = this;
    var config = {
      method: 'post',
      url: 'http://localhost:5164/Client/register',
      headers: { 
        'Content-Type': 'application/json'
       },
      data : data

    }

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("Registrado com sucesso!");
      self.router.navigate(['/login'])
    })
    .catch(function (error) {
      alert("Erro!");
      console.log(error);
    });

  }

}
