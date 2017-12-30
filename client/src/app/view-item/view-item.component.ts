import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  item: any;
  user: any;
  currentImage: string;
  i: number=0;
  images: any;
  length:number;
  constructor(private route: ActivatedRoute , private service: DataService ) {
    this.route.params.subscribe(res => {
      this.service.getItemInfo({id: res.id}).subscribe(res => {
        this.item=res.info[0].item;
        this.user=res.info[1].user;
        this.currentImage=res.info[0].item.images[this.i].image;
        this.images=res.info[0].item.images;
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
    console.log(this.item.images.length-1)
    this.currentImage=this.item.images[this.i].image
  }

  parseInt(num: string){
    return parseInt( num );
  }
  ngOnInit() {
  }

}
