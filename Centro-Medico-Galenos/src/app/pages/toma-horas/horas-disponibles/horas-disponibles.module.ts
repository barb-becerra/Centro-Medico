import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasDisponiblesPageRoutingModule } from './horas-disponibles-routing.module';

import { HorasDisponiblesPage } from './horas-disponibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasDisponiblesPageRoutingModule
  ],
  declarations: [HorasDisponiblesPage]
})
export class HorasDisponiblesPageModule {}
