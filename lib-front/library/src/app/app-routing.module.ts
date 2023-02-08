import { AuthorReadComponent } from './components/author-read/author-read.component';
import { LibReadComponent } from './components/lib-read/lib-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'books',
  component: LibReadComponent
},{
  path: 'authors',
  component: AuthorReadComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
