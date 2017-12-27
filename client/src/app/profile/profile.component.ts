import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayViewResult: string;
  constructor() { }
  displayView (displayViewResult) {
    this.displayViewResult = displayViewResult;
  }
  ngOnInit() {
  }

}
