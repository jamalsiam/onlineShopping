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
  constructor(private storage: LocalStorageService , private service: DataService) {
    this.service.getUserName({id: this.storage.get('onlineShopUserId')})
      .subscribe(res => {
        if (res.data === 'success') {
          this.username = res.username;
        } else {
          this.storage.remove('onlineShopUserId');
        }
      });
  }
  ngOnInit() {
  }

}
