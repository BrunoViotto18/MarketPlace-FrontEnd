import { Component, OnInit } from '@angular/core';
import { Address} from '../Classes';

@Component({
  selector: 'app-address-register',
  templateUrl: './address-register.component.html',
  styleUrls: ['./address-register.component.css']
})
export class AddressRegisterComponent implements OnInit {

  placeholders = [
    "Rua",
    "Código Postal",
    "Estado",
    "Cidade",
    "País"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
