import { LibService } from './../lib.service';
import { Component } from '@angular/core';
import { Book } from '../lib.model'


@Component({
  selector: 'app-lib-read',
  templateUrl: './lib-read.component.html',
  styleUrls: ['./lib-read.component.css']
})
export class LibReadComponent {

  book: Book[] = [];

  constructor(private libService:LibService){}

  ngOnInit(): void {
    this.libService.readBook().subscribe(books => {
      this.book = books
      console.log(books)
    })

  }
}
