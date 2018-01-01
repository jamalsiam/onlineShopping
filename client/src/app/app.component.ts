import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.jQuery();
  }

  jQuery(){
    $(document).ready(function() {
      var scroll=$('.scroll');
      var heightScreen=$('.heightScreen').height()
      scroll.hide();
      $(window).scroll(function() {
        if ($(document).scrollTop() >heightScreen) {
          scroll.fadeIn('slow');
        }
        else {
          scroll.fadeOut('slow');
        }
      });

      scroll.click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
      })
    });​
  }

}
