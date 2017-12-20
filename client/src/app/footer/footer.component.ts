import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {DataService} from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
