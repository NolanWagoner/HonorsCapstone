import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { P404Component } from './p404/p404.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CitationsComponent } from './citations/citations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'solutions/:answers',
    component: SolutionsComponent
  },
  {
    path: 'citations',
    component: CitationsComponent
  },
  {
    path: '**',
    component: P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
