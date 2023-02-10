import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../lib.model';

@Component({
  selector: 'app-delete-authors',
  templateUrl: './delete-authors.component.html',
  styleUrls: ['./delete-authors.component.css']
})
export class DeleteAuthorsComponent {

  author: Author = {
    id: 0,
    nome: '',
  }

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.authorService.readAuthorById(id).subscribe(author => {
      this.author = author
    })

  }

  deleteAuthor(){
    this.authorService.deleteAuthor(this.author.id).subscribe(() => {
      this.router.navigate(['/authors'])
    })
  }
}
