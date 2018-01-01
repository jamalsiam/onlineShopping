import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   name: string;
   address: string='all';
   category: string='all';
   query:any;

  constructor(private router:Router, private route: ActivatedRoute ) { }
  search() {

    if(this.name ==undefined || this.name==""){
      this.query={};

    }else {
      if(this.address =="all" && this.category=="all"){
        this.query={name:this.name};
      }
      if(this.address !="all" && this.category=="all"){
        this.query={name:this.name,address:this.address};
      }
      if(this.address =="all" && this.category!="all"){
        this.query={name:this.name,category:this.category};
      }
      if(this.address !="all" && this.category!="all"){
        this.query={name:this.name,category:this.category,address:this.address};
      }
    }

    this.router.navigate(['search/'+JSON.stringify(this.query)]);
  }

  ngOnInit() {
  }

}
