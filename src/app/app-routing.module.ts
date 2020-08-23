import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorsHomeComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: DirectorsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
