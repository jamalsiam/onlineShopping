import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from "@angular/router";

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
  constructor(private _data: DataService ,private Service:DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(res=>{
      if(res.query!==undefined){
        let query=JSON.parse(res.query)
        console.log(query)
        this.searchApi(query);
        this.searchBoxCtr(query);
      }
      else {
        this.searchApi({});
      }


    })
  }
  search() {

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
    this.msgSearch='';
    this.display=true;
    this.searchLest=[];
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

  searchBoxCtr(query: any) {
    this.name=query.name;

    if(query.category===undefined)
      this.category='all';
    else
      this.category=query.category;

    if(query.address===undefined)
      this.address='all';
    else
      this.address=query.address;

  }
}
