import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomaHorasPage } from './toma-horas.page';

const routes: Routes = [
  {
    path: '',
    component: TomaHorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomaHorasPageRoutingModule {}
