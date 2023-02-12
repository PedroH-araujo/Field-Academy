import { ChampionsViewComponent } from './components/champions-view/champions-view.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: 'champion',
component: NavComponent},{
  path: '',
  component: ChampionsViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
