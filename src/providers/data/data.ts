import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Book } from '../../models/book.model';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  url = 'https://www.googleapis.com/books/v1/';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  /**
   * Search book
   */
  search(q: string, start: number, limit: number): Observable<Book[]> {
      const ressource =  'volumes';
      const params = new HttpParams()
                            .set('q', q)
                            .set('startIndex', start.toString())
                            .set('maxResults', limit.toString())

      return this.http.get<any>(`${this.url}${ressource}`, { params: params })
                      .map((data) => data.items.map(book => new Book(book)))
  }

  /**
   * Get a book
   */
  getBookById(id: string): Observable<Book> {
    const ressource =  'volumes/';
    return this.http.get<any>(`${this.url}${ressource}${id}`).map((data) => new Book(data))
  }
}
