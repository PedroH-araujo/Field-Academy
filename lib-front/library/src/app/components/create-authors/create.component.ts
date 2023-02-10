import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../lib.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private authorService: AuthorService,private router: Router){}

  author : Author = {
    id: 0,
    nome: '',
    book: ''
  }

  createAuthors(){
    this.authorService.createAuthor(this.author).subscribe(() => {
      alert('Autor Criado')
      this.router.navigate(['/authors'])
    })
  }

  ngOnInit(): void {
    this.authorService.readAuthor().subscribe(element => {
      this.author.id = element.length + 1
    })
  }


}
