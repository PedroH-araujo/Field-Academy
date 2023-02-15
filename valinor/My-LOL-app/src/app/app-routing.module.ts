import { HomeComponent } from './view/home/home.component';
import { ChampionsViewComponent } from './components/champions-view/champions-view.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'champion/:name',
    component: NavComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'champion',
    component: ChampionsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
