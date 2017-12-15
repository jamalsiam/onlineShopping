import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name: string="";
  constructor(private _data: DataService) { }


  ngOnInit() {
     this._data.getMethod().subscribe(datas =>{
       console.log(datas);
       this.name=datas.name;
     });
      this._data.postMethod({post:'data from front end'}).subscribe(res =>{
        console.log(res);
      })
  }

}
