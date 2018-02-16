import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Book } from '../../models/book.model';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'search',
  segment: 'search',
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  q: string = '';
  items: Book[];
  start = 0;
  limit = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
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

}
