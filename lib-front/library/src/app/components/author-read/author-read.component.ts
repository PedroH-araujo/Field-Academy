import { AuthorService } from './../author.service';
import { Component } from '@angular/core';
import { Author } from '../lib.model';

@Component({
  selector: 'app-author-read',
  templateUrl: './author-read.component.html',
  styleUrls: ['./author-read.component.css']
})
export class AuthorReadComponent {

  authors : Author[] = []
  displayedColumns: string[] = ['id', 'nome', 'book'];

  constructor(private authorServie: AuthorService){}

  ngOnInit(): void {
    this.authorServie.readAuthor().subscribe(author => {
      this.authors = author
      console.log(author)
    })

  }

}
