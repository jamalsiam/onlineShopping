import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./../signup/signup.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  display: boolean;
  password: string;
  msg: string;
  constructor(private service: DataService, private router: Router, private storage: LocalStorageService) {}

  signIn() {

    this.display=true;
    if (!this.email || !this.password) { /*if user give a invalid email or/and password*/
      this.msg = 'fill all fields';
      this.display=false;
    } else { /*if user given't  correct email or/and password*/
      this.service.signIn({email: this.email,
        password: this.password})
        .subscribe(res => {
          this.display=false;
          if (res.data === 'signin') { /*if user give a correct email and password*/
            this.storage.set('onlineShopUserId', res.id);
            this.router.navigate(['']);
            location.reload();
          }else {/*if user give any email and password*/
            this.msg = res . data;
          }
        });
    }
  }
  ngOnInit() {
    if( this.storage.get('onlineShopUserId') )
      this.router.navigate(['']);

  }

}
