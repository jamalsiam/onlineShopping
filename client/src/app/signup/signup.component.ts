import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import {DataService} from '../data.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   email: string;
   username: string;
   password: string;
  display: boolean;

  confirmPassword:  string;
   msg: string ;
  constructor(private _service: DataService, private local: LocalStorageService, private router: Router) {
  }

  signUp() {
    this.display=true;
    if ( !this.email || !this.username || !this.confirmPassword || !this.password) {
      this.display=false;
      this.msg = 'fill all field';
    }else
      if (this.confirmPassword === this.password && this.password !== '') {
      this._service.signUp({email: this.email,
                            username: this.username,
                            password: this.password}).subscribe(res => {
                              this.display=false;
                              if (res.data === 'signup') {
                                    this.local.set('onlineShopUserId', res.id);
                                    this.router.navigate(['']);
                                    location.reload()

                              }else {
                                this.msg = res.data;
                              }
      });
  } else {
        this.display=false;
      this.msg = 'password does not match';
    }

    console.log(this.email, this.username);
  }
  ngOnInit() {
    if (this.local.get('onlineShopUserId') )
    this.router.navigate(['']);

  }
}
