import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'collapse-generate',
    pathMatch: 'full'
  },
  {
    path: 'collapse-generate',
    loadChildren: () => import('./collapse-generate/collapse-generate.module').then(m => m.CollapseGenerateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
