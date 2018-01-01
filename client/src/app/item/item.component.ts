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
  @Input() from: string;

  id: any;
  msgDelete: string= 'Delete';
  display: boolean;
  addToCart:string= 'Add To Cart';
  cartClassCtr:string='addItem';
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

  addItemToCart(itemId){
    this.addToCart= 'Remove From Cart';
    this.cartClassCtr='delete';
  }
  ngOnInit() {
  }
  checkCart( itemId,userId){
    this.service.checkCart({ itemId:itemId , userId:userId}).subscribe(res =>{
    })
  }


}
