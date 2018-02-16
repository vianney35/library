import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LibraryProvider } from '../../providers/library/library';
import { Book } from '../../models/book.model';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'book',
  segment: 'book/:id',
  defaultHistory: ['search']
})
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  id: string;
  book: Book;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataProvider: DataProvider,
              public libraryProvider: LibraryProvider
            ) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    this.dataProvider.getBookById(this.id).subscribe(
      (book) => {
        console.log(book);
        this.book = book;
    },
      (err) => console.error(err)
    );
  }

  add() {
    this.libraryProvider.add(this.book)
  }

  remove() {
    this.libraryProvider.remove(this.book)
  }

  isInLibrary() {
    this.libraryProvider.isIn(this.book)
  }
}
