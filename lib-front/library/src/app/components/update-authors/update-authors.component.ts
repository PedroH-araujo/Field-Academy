import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../lib.model';

@Component({
  selector: 'app-update-authors',
  templateUrl: './update-authors.component.html',
  styleUrls: ['./update-authors.component.css']
})
export class UpdateAuthorsComponent {

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router){}

  author: Author = {
    id: 0,
    nome: '',
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.authorService.readAuthorById(id).subscribe(author => {
      this.author = author
    })

  }

  updateAuthor(){
    this.authorService.updateAuthor(this.author.id,this.author.nome).subscribe(() => {
      this.router.navigate(['/authors'])
    })
  }
}
