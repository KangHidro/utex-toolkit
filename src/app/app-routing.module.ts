import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainToolComponent } from './main-tool/main-tool.component';

const routes: Routes = [
  {
    path: '',
    component: MainToolComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
