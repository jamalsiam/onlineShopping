import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {LocalStorageService} from 'angular-2-local-storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
userName: string;
mobile: string;
city: string;
password: string;
deleteAccount: boolean;
btnText = 'Save';
msg: string;

  constructor(private storage: LocalStorageService , private service: DataService, private router: Router) {
  this.getUserInfo();
  }

  deleteAccountMethod(mode) {
    if (mode) {
      this.btnText = 'Delete';
    }else {
      this.btnText = 'Save';
    }
  }
  settings() {
    this.msg = '';
    if (this.deleteAccount) { // delete account
      if (this.password) {
        this.service.deleteAccount({_id: this.storage.get('onlineShopUserId') , password : this.password})
          .subscribe(res => {
            if (res.data === 'success') {
              this.storage.remove('onlineShopUserId');
              this.router.navigate(['']);
              location.reload();
            } else {
              this.msg = res.data;
            }

          });
      }else {
        this.msg = 'insert your password';
      }
    }else { // update account
      if (this.userName && this.mobile && this.city ) {
        this.service.updateAccount({_id: this.storage.get('onlineShopUserId'),
                                          username : this.userName,
                                          mobile : this.mobile,
                                          location: this.city})
          .subscribe(res => {

          });
      } else {
        this.msg = 'insert all fields';
      }
    }
  }
  ngOnInit() {
  }
  private getUserInfo() {
    this.service.getUserInfo({id: this.storage.get('onlineShopUserId')})
      .subscribe(res => {
        console.log(res)
        if (res.data === 'success') {
          this.userName = res.userName;
          this.city = res.location;
          this.mobile = res.mobile;
        } else {
          this.storage.remove('onlineShopUserId');
        }
      });
  }
}
