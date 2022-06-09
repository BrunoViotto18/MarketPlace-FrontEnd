import { Component, OnInit } from '@angular/core';
import  axios  from 'axios';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  placeholders = [
    'Usuário',
    'Senha'
  ]

  constructor() { }

  ngOnInit(): void {

  }

  verify(){
    let login = document.querySelector(`#${this.placeholders[0]}`) as HTMLInputElement
    let Senha = document.querySelector(`#${this.placeholders[1]}`) as HTMLInputElement
    var data = JSON.stringify({
      "login": login.value,
      "passwd": Senha.value
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5164/Client/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
      
      localStorage.setItem("authToken", response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }

}
