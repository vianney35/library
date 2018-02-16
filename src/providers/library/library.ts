import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LibraryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LibraryProvider {
  private books: Book[];

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello LibraryProvider Provider');
    this.books = [];
  }

  get(){
    return this.books;
  }

  add(book: Book){
    this.books.push(book);
  }

  remove(book: Book){
    //this.books.filter(b => b.id === book.id).reduceRight;

  }

  isIn(book: Book): boolean{
    //this.books.filter(b => b.id === book.id ).length === 1;
    return false;
  }

}
