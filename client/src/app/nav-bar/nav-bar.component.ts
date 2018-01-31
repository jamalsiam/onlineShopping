import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {DataService} from '../data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username: string;
  id: any;
  constructor(private storage: LocalStorageService , private service: DataService) {
    this.id=this.storage.get('onlineShopUserId')
    this.service.getUserName({id: this.id})
      .subscribe(res => {
       

        if (res.data === 'success') {;
          if(res.username.split(" ")[1])
          this.username = res.username.split(" ")[0].charAt(0).toUpperCase()+'.'+res.username.split(" ")[1].charAt(0).toUpperCase();
          else
          this.username= res.username.split(" ")[0].charAt(0).toUpperCase();
           

        } else {
          this.storage.remove('onlineShopUserId');
        }
      });
  }
  ngOnInit() {
  }

}
