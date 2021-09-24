import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomaHorasPageRoutingModule } from './toma-horas-routing.module';

import { TomaHorasPage } from './toma-horas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomaHorasPageRoutingModule
  ],
  declarations: [TomaHorasPage]
})
export class TomaHorasPageModule {}
