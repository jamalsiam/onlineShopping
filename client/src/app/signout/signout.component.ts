import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {Router, } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private storage: LocalStorageService , private router: Router) { }
  ngOnInit() {
    this.storage.remove('onlineShopUserId');
    this.router.navigate(['signin']);

     location.reload();
  }

}
