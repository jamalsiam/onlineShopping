import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  display:boolean;
  err:string;
  constructor(private storage: LocalStorageService, private service: DataService) {
    this.err='';
    this.service.getCart({id: this.storage.get('onlineShopUserId')}).subscribe(res => {
      this.cart = res.cart;
      this.display=true;
       if(res.cart.length==0)
       this.err='You Don\'t Have Any Cart Item';
    });
  }

  ngOnInit() {
  }

}
