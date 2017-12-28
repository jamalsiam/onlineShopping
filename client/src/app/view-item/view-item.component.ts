import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  constructor(private route: ActivatedRoute , private service: DataService ) {
    this.route.params.subscribe(res => {
      this.service.getItemInfo({id: res.id}).subscribe(res => { });
    });
  }

  ngOnInit() {
  }

}
