import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  axios  from 'axios';
import { delay } from 'rxjs';
import { CustomInput } from '../CustomInput';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  inputs: Array<CustomInput> = [
    {label:'Usuário', type:'text', required:true},
    {label:'Senha', type:'password', required:true}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  verify(){
    let login = document.querySelector(`#${this.inputs[0].label}`) as HTMLInputElement
    let senha = document.querySelector(`#${this.inputs[1].label}`) as HTMLInputElement

    if (!login.reportValidity())
      return
    
    if (!senha.reportValidity())
      return

    var data = JSON.stringify({
      "login": login.value,
      "passwd": senha.value
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5164/Client/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    let instance = this
    axios(config)
    .then(function (response) {
      localStorage.setItem("authToken", response.data['token'])
      instance.router.navigate(['/']).then(() =>{
        window.location.reload();
      });

      
    })
    .catch(function (error) {
      if (error.response.data == 'Invalid credentials')
        alert('Usuário ou senha inválidos! Tente novamente.')
      login.value = ''
      senha.value = ''
    });

  }

}
