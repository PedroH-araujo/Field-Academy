import { DeleteAuthorsComponent } from './components/delete-authors/delete-authors.component';
import { CreateBooksComponent } from './components/create-books/create-books.component';
import { AuthorReadComponent } from './components/read-authors/author-read.component';
import { LibReadComponent } from './components/read-books/lib-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create-authors/create.component';
import { UpdateBooksComponent } from './components/update-books/update-books.component';
import { UpdateAuthorsComponent } from './components/update-authors/update-authors.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component';

const routes: Routes = [{
  path: 'books',
  component: LibReadComponent
},{
  path: 'authors',
  component: AuthorReadComponent
},{
  path: 'create-authors',
  component: CreateComponent
},{
  path: 'create-books',
  component: CreateBooksComponent
},{
  path: 'update-books/:id',
  component: UpdateBooksComponent
},{
  path: 'update-authors/:id',
  component: UpdateAuthorsComponent
},{
  path: 'delete-books/:id',
  component: DeleteBooksComponent
},{
  path: 'delete-authors/:id',
  component: DeleteAuthorsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
