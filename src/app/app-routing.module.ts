import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainToolComponent } from './main-tool/main-tool.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {
    path: '',
    component: MainToolComponent
  },
  {
    path: 'error',
    component: PageErrorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
