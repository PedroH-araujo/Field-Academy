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

  updateBook(id: number,name: string){
    return this.http.put(`http://localhost:3000/book/${id}/${name}`,null)
  }

  readBookById(id:any): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/book/${id}`)
  }

  deleteBook(id:any){
    return this.http.delete(`http://localhost:3000/book/${id}`)
  }

  connectAuthorBook(idA:any,idB:any){
    return this.http.post(`http://localhost:3000/author-book/${idA}/${idB}`,null)
  }

  disconnectAuthorBook(idA:any,idB:any){
    return this.http.delete(`http://localhost:3000/author-book/${idA}/${idB}`)
  }
}
