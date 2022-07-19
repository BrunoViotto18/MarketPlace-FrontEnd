import { Component, OnInit } from '@angular/core';
import { Usuario,Address } from '../Classes';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  placeholders = [
    'Nome',
    'Telefone',
    'E-mail',
    'Login',
    'Data de Nascimento',
    'Senha',
    'Documento'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
