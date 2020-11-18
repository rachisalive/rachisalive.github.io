import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes =
  [
    { path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
    { path: 'resume', component: ResumeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
