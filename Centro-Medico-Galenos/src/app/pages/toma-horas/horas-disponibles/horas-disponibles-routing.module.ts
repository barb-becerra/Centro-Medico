import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorasDisponiblesPage } from './horas-disponibles.page';

const routes: Routes = [
  {
    path: '',
    component: HorasDisponiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorasDisponiblesPageRoutingModule {}
