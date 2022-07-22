import { Component, OnInit } from '@angular/core';
import { CustomInput } from '../CustomInput';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  
  labelsUser: Array<CustomInput> = [
    {label:'Nome', type:'text', required:true},
    {label:'CPF', type:'text', required:true},
    {label:'Data de Nascimento', type:'date', required:true},
    {label:'Email', type:'text', required:true},
    {label:'Telefone/Celular', type:'phone', required:true},
    {label:'Login', type:'text', required:true},
    {label:'Senha', type:'password', required:true}
  ]

  labelsAddress: Array<CustomInput> = [
    {label:'Rua', type:'text', required:true},
    {label:'Cidade', type:'text', required:true},
    {label:'Estado', type:'text', required:true},
    {label:'País', type:'text', required:true},
    {label:'CEP', type:'text', required:true},
  ]

  //labelsUser: Array<string> = ['Nome', 'CPF', 'Data de Nascimento', 'Email', 'Telefone/Celular', 'Login', 'Senha']
  //labelsAddress: Array<string> = ['Rua', 'Cidade', 'Estado', 'País', 'CEP']

  constructor(private router: Router) { }

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

    const nome = document.body.querySelector(`.cadastro-user #${this.labelsUser[0].label}`) as HTMLInputElement
    const documento = document.body.querySelector(`.cadastro-user #${this.labelsUser[1].label}`) as HTMLInputElement
    const dataNascimento = document.body.querySelector(`.cadastro-user #${this.formatLabel(this.labelsUser[2].label)}`) as HTMLInputElement
    const email = document.body.querySelector(`.cadastro-user #${this.labelsUser[3].label}`) as HTMLInputElement
    const telefone = document.body.querySelector(`.cadastro-user #${this.formatLabel(this.labelsUser[4].label)}`) as HTMLInputElement
    const login = document.body.querySelector(`.cadastro-user #${this.labelsUser[5].label}`) as HTMLInputElement
    const senha = document.body.querySelector(`.cadastro-user #${this.labelsUser[6].label}`) as HTMLInputElement

    const rua = document.body.querySelector(`.cadastro-address #${this.labelsAddress[0].label}`) as HTMLInputElement
    const cidade = document.body.querySelector(`.cadastro-address #${this.labelsAddress[1].label}`) as HTMLInputElement
    const estado = document.body.querySelector(`.cadastro-address #${this.labelsAddress[2].label}`) as HTMLInputElement
    const pais = document.body.querySelector(`.cadastro-address #${this.labelsAddress[3].label}`) as HTMLInputElement
    const cep = document.body.querySelector(`.cadastro-address #${this.labelsAddress[4].label}`) as HTMLInputElement

    const client = document.body.querySelector(`.cadastro-user #client`) as HTMLInputElement


    // Address
    // var data = JSON.stringify({
    //   "street": `${rua.value}`,
    //   "city": `${cidade.value}`,
    //   "state": `${estado.value}`,
    //   "country": `${pais.value}`,
    //   "postal_code": `${cep.value}`
    // });
    
    // var config = {
    //   method: 'post',
    //   url: 'http://localhost:5164/Address/register',
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   alert("Falha no cadastro")
    //   console.log(error);
    //   return;
    // });


    // User
    var data = JSON.stringify({
      "name": `${nome.value}`,
      "document": `${documento.value}`,
      "date_of_birth": `${dataNascimento.value}`,
      "email": `${email.value}`,
      "phone": `${telefone.value}`,
      "login": `${login.value}`,
      "passwd": `${senha.value}`,
      "address": {
        "street": `${rua.value}`,
        "city": `${cidade.value}`,
        "state": `${estado.value}`,
        "country": `${pais.value}`,
        "postal_code": `${cep.value}`
      }
    });
    
    var config = {}

    if (client.checked)
      config = {
        method: 'post',
        url: 'http://localhost:5164/Client/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    else
      config = {
        method: 'post',
        url: 'http://localhost:5164/Owner/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    
    let instance = this
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      instance.router.navigate(['/'])
    })
    .catch(function (error) {
      alert("Falha no cadastro")
      console.log(error);
    });
  }

  formatLabel(label: string) : string{
    while (label.indexOf('/') != -1 || label.indexOf(' ') != -1){
      label = label.replace('/', '_').replace(' ', '_')
    }
    return label
  }

}
