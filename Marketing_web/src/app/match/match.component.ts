import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Match } from './../entities/match'
import { environment } from '../../environments/environment.prod';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {


  buyers;
  sellers: {};
  buyer: any;
  match = [];
  url = environment.url;
  constructor(private http: HttpClient) {

    //this.matches();
  }

  showmatches(){
    this.matches();
  }

  async matches() {

    await this.http.get(this.url + "findsellers").subscribe(
      response => {
        this.sellers = response;

      })

    await this.http.get(this.url + "findbuyers").subscribe(
      async response => {
        this.buyers = response;
        console.log(this.buyers);
        console.log(this.sellers);
        console.log(this.findClosest(101));
        await _.map(this.sellers, async (value, key) => {
          this.buyer = await this.findClosest(value.price);
          console.log(this.buyer.buyer);
          console.log(this.buyer.price);
          console.log(value.price);
          this.match.push({ b: this.buyer.buyer, s: value.seller })
        })
        //console.log(this.match);
      })

  }


  findClosest(x) {               //method to find nearest buyer
    return this.buyers.reduce((best, current) => {
      return (current.price >= x && (!best || current.price < best.price)) ?
        current :
        best;
    }, undefined);


  }





}
