import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {DataService} from '../data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data: any;
  id: any;
  msgDelete: string= 'Delete';
  display: boolean;

  constructor(private storage:LocalStorageService , private service:DataService) {
    this.id =this.storage.get('onlineShopUserId');
  }
  deleteItem(itemId){
    if(this.msgDelete=='Delete'){
      this.display=true;
      this.service.deleteItem({itemId:itemId,userId:this.id}).subscribe(res =>{
        this.msgDelete=res.data;
        this.display=false;
      })
    }

  }

  ngOnInit() {
  }

}
