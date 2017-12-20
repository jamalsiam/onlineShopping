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


  getMethod() {
    return this.http.get('/api/getmethod').map(res => res.json());
    // this._data.getMethod().subscribe(datas =>{
    //   console.log(datas);
    //   this.name=datas.name;
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

  postMethod(record) {
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/postmethod', record, {headers: headers}).map(res => res.json())
  }

}
