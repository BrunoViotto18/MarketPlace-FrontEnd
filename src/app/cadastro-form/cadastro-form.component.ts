import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  labelsUser: Array<string> = ['Nome', 'CPF', 'Data de Nascimento', 'Email', 'Telefone/Celular', 'Login', 'Senha']
  labelsAddress: Array<string> = ['Rua', 'Cidade', 'Estado', 'País', 'CEP']

  constructor() { }

  ngOnInit(): void {
  }

  toggleForms(){
    // for (let i = 0; i < this.labelsUser.length; i++){
    //   while (this.labelsUser[i].indexOf(' ') != -1 || this.labelsUser[i].indexOf('/') != -1){
    //     this.labelsUser[i] = this.labelsUser[i].replace(' ', '_').replace('/', '_')
    //   }
    // }

    const userForm = document.body.querySelector('.cadastro-user') as HTMLDivElement
    const userFormInputs = Array.from(document.body.querySelectorAll('.cadastro-user input') as NodeListOf<HTMLInputElement>)
    const addressForm = document.body.querySelector('.cadastro-address') as HTMLDivElement

    if (!userForm.classList.contains('hide')){
      for (let input of userFormInputs){
        if (!input.reportValidity()){
          return
        }
      }
    }

    userForm.classList.toggle('hide')
    addressForm.classList.toggle('hide')
  }

  cadastrar(){
    const adressFormInputs = Array.from(document.body.querySelectorAll('.cadastro-address input') as NodeListOf<HTMLInputElement>)

    for (let input of adressFormInputs){
      if (!input.reportValidity()){
        return
      }
    }

    //let nome = document.body.querySelector('.cadastro-address') as NodeListOf<HTMLInputElement>

    var data = JSON.stringify({
      "name": `${}`,
      "date_of_birth": `${}`,
      "document": `${}`,
      "email": `${}`,
      "phone": `${}`,
      "login": `${}`,
      "passwd": `${}`,
      "address": {
        "street": `${}`,
        "city": `${}`,
        "state": `${}`,
        "country": `${}`,
        "postal_code": `${}`
      }
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5164/Client/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
