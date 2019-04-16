import { Component, OnInit } from '@angular/core';
import { Seller } from './../entities/seller';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent  {

  constructor(private http: HttpClient) {}
  url = environment.url;
  seller = new Seller();

  addSeller(seller){
    console.log(seller);
    return this.http.post(this.url+"addSeller",seller).subscribe(
      response => {
        console.log(response);
      })

  }
 

}
