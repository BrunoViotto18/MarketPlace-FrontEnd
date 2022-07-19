import { Component, ElementRef, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: ['./heart-button.component.css']
})
export class HeartButtonComponent implements OnInit {

  @Input()
  stockId: number | undefined

  isWishlisted: boolean = false

  constructor(private ref: ElementRef) {}

  ngOnInit(): void {
    var config = {
      method: 'get',
      url: `http://localhost:5164/WishList/getWishlistState/${this.stockId}`,
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    };

    let instance = this
    axios(config)
    .then(function (response) {
      instance.isWishlisted = response.data
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  fillHeart(event: Event){
    var config = {}
    if (!this.isWishlisted){
      config = {
        method: 'post',
        url: `http://localhost:5164/WishList/addProduct/${this.stockId}`,
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      };
    }
    else{
      config = {
        method: 'delete',
        url: `http://localhost:5164/WishList/removeProduct/${this.stockId}`,
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      };
    }
    
    let instance = this;
    axios(config)
    .then(function (response) {
      instance.isWishlisted = !instance.isWishlisted;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
