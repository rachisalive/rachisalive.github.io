import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes =
  [
    { path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
    { path: 'work', loadChildren: () => import('./work/work.module').then(m => m.WorkModule) },
    { path: 'resume', component: ResumeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
