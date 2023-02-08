import { Book } from './lib.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  urlBook = 'http://localhost:3000/books'

  constructor(private http: HttpClient) { }

  readBook(): Observable<Book[]>{
    return this.http.get<Book[]>(this.urlBook)
  }

  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>('http://localhost:3000/book',book)
  }
}
