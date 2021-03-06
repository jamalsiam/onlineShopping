import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataService {
  // To transfar data between component
  /* private goals = new BehaviorSubject <any> ([]);
   goal= this.goals.asObservable();
   changeGoal(goal){
     this.goals.next(goal);
   }*/

  constructor(private http: Http) {

  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
  }



  signUp(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/signup', record, {headers: headers}).map(res => res.json());
  }
  getUserName(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/getusername', record, {headers: headers}).map(res => res.json());
  }
  signIn(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/signin', record, {headers: headers}).map(res => res.json());
  }


  AddItem(record)  {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/addItem', record, {headers: headers}).map(res => res.json());
  }

  deleteAccount(record)  {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/deleteaccount', record, {headers: headers}).map(res => res.json());
  }
  updateAccount(record)  {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/updateaccount', record, {headers: headers}).map(res => res.json());
  }
  getUserInfo(record)  {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/getuserinfo', record, {headers: headers}).map(res => res.json());
  }
  getOffer() {
    return this.http.get('/api/getoffer').map(res => res.json());
  }

  getSale(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/getsale', record, {headers: headers}).map(res => res.json());
  }

  getItemInfo(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/getiteminfo', record, {headers: headers}).map(res => res.json());
  }

  addToCart(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/addtocart', record, {headers: headers}).map(res => res.json());
  }

  getCart(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/getcart', record, {headers: headers}).map(res => res.json());
  }

  deleteItem(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/deleteitem', record, {headers: headers}).map(res => res.json());
  }

  removeItemFromCart(record){
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/removeitemfromcart', record, {headers: headers}).map(res => res.json());
  }
  search(record){
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/search', record, {headers: headers}).map(res => res.json());
  }
}
