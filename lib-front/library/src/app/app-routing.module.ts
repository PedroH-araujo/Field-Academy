import { CreateBooksComponent } from './components/create-books/create-books.component';
import { AuthorReadComponent } from './components/author-read/author-read.component';
import { LibReadComponent } from './components/lib-read/lib-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create-authors/create.component';

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
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
