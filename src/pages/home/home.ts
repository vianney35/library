import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataProvider } from '../../providers/data/data';
import { LibraryProvider } from '../../providers/library/library';
import { Book } from '../../models/book.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  q: string = '';
  items: Book[];
  start = 0;
  limit = 10;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataProvider: DataProvider,
              public libraryProvider: LibraryProvider,
              private barcodeScanner: BarcodeScanner
            ) {
    this.items = [];
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    this.q = ev.target.value;
    this.start = 0;

    if(this.q){
      this.dataProvider.search(this.q, this.start, this.limit).subscribe(
        (books) => {
          this.items = books;
      },
        (err) => console.error(err)
      );
    } else {
      this.items = [];
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.start += this.limit;

    this.dataProvider.search(this.q, this.start, this.limit).subscribe(
      (books) => {
        this.items = [ ...this.items, ...books];
        infiniteScroll.complete();
    },
      (err) => {
        console.error(err);
        infiniteScroll.complete();
      }
    );
  }

  go(book: Book){
    this.navCtrl.push('book', {id: book.id});
  }

  scan(){
    console.log('start scan');

    this.barcodeScanner.scan().then((barcodeData) => {
      alert(barcodeData);
     }, (err) => {
      alert('Error scan');
     });
  }
}
