import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  idea: any = [];
  display:boolean=false;
  name: string;
  searchLest:any;
  category:string='all';
  address:string='all';
  msgSearch:string;
  constructor(private _data: DataService ,private Service:DataService) {
  }
  search() {
    this.msgSearch='';
    this.display=true;
    this.searchLest=[];
    if(this.name ==undefined || this.name==""){
      this.searchApi({});

    }else {
      if(this.address =="all" && this.category=="all"){
        this.searchApi({name:this.name});
      }
      if(this.address !="all" && this.category=="all"){
        this.searchApi({name:this.name,address:this.address});
      }
      if(this.address =="all" && this.category!="all"){
        this.searchApi({name:this.name,category:this.category});
      }
      if(this.address !="all" && this.category!="all"){
        this.searchApi({name:this.name,category:this.category,address:this.address});
      }
    }


  }
  searchApi(query){
    this.Service.search(query)
      .subscribe(res =>{
        this.searchLest=res.search;
        this.display=false;
        if(JSON.stringify(res.search)=="[]") {
          this.msgSearch = "Item Not Found ... ( Item Name:"+this.name+", Category:"+this.category+", Address:"+this.address+")";
        }
        else {
          this.msgSearch = "Result search ["+res.search.length+" : Items]";
        }
      })
  }
  ngOnInit() {
  }

}
