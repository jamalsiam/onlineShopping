import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  base64textString: String;
  jsonImage: any= [];
  itemName: string;
  itemNumber: number;
  itemCategory: string;
  itemPrice: number;
  itemOff: number;

  constructor(private service: DataService , private storage: LocalStorageService ) { }

  publish() {
   this.service.AddItem({
                          userId: this.storage.get('onlineShopUserId'),
                          image: this.jsonImage,
                          name: this.itemName,
                          number: this.itemNumber,
                          category: this.itemCategory,
                          price: this.itemPrice,
                          off: this.itemOff})
   .subscribe ( res => {
   });
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    if (this.jsonImage.length < 4) {
      this.jsonImage.push({image: this.base64textString});
    }
  }
  ngOnInit() {
  }

}
