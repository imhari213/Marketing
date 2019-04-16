import { Component, OnInit } from '@angular/core';
import { Buyer } from './../entities/buyer';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {
  url = environment.url;
  buyer = new Buyer();
  constructor(private http: HttpClient) {}

  addBuyer(buyer) {
    console.log(buyer);
    return this.http.post(this.url+"addBuyer",buyer).subscribe(
      response => {
        console.log(response);
      })
  }


}
