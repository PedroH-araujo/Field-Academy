import { LibService } from './../lib.service';
import { Component } from '@angular/core';
import { Book } from '../lib.model'


@Component({
  selector: 'app-lib-read',
  templateUrl: './lib-read.component.html',
  styleUrls: ['./lib-read.component.css']
})
export class LibReadComponent {

  books: Book[] = [];
  displayedColumns: string[] = ['id', 'nome', 'author'];

  constructor(private libService:LibService){}

  ngOnInit(): void {
    this.libService.readBook().subscribe(books => {
      this.books = books
      console.log(books)
    })

  }

}
