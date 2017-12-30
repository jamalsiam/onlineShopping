import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  display: boolean = false;
  id: any;
  item: any;
  user: any;
  currentImage: string;
  i: number=0;
  err: string;
  data: string;

  constructor(private route: ActivatedRoute , private service: DataService, private storage:LocalStorageService) {


    this.route.params.subscribe(res => {

      this.service.getItemInfo({id: res.id}).subscribe(res => {
        this.item=res.info[0].item;
        this.user=res.info[1].user;
        this.currentImage=res.info[0].item.images[this.i].image;
        this.id=this.storage.get('onlineShopUserId');
        this.display=true;
      });
    });
  }
  previousImage(){
    this.i-=1;
    if(this.i < 0)
      this.i=this.item.images.length-1;

    this.currentImage=this.item.images[this.i].image
  }
  nextImage(){
    this.i+=1;
    if(this.i>this.item.images.length-1)
      this.i=0;
    this.currentImage=this.item.images[this.i].image
  }
  addCart(userId ,itemId){
    this.service.addToCart({userId:userId ,itemId:itemId}).subscribe(res =>{
      this.err=res.err;
      this.data=res.data;

    });
  }
  parseInt(num: string){
    return parseInt( num );
  }
  ngOnInit() {
    this.display=false;

  }

}
