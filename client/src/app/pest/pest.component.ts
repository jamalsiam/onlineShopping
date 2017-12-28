import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-pest',
  templateUrl: './pest.component.html',
  styleUrls: ['./pest.component.css']
})
export class PestComponent implements OnInit {
  constructor(private service: DataService) {}
  offers: any;
  ngOnInit() {
    this.service.getOffer().subscribe(res => {
      this.offers = res.offers;
    });
  }

}
