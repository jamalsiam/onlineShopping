import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {DataService} from '../data.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  sales: any;
  display:boolean;
  constructor(private storage: LocalStorageService, private service: DataService) {

    this.service.getSale({id: this.storage.get('onlineShopUserId')}).subscribe(res => {
      this.sales = res.sales;
      this.display=true;
    });
  }

  ngOnInit() {
  }

}
