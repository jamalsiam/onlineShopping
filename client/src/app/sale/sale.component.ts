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
  err:string;
  constructor(private storage: LocalStorageService, private service: DataService) {

    this.service.getSale({id: this.storage.get('onlineShopUserId')}).subscribe(res => {
      this.sales = res.sales;
      this.display=true;
      if(res.sales.length==0)
      this.err='You Don\'t Have Any record at Publish Item';
  
    });
  }

  ngOnInit() {
  }

}
