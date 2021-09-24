import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tomahoras2Page } from './tomahoras2.page';

const routes: Routes = [
  {
    path: '',
    component: Tomahoras2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tomahoras2PageRoutingModule {}
