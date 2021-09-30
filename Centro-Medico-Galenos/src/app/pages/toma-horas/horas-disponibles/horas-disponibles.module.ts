import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { MiCalendarioComponent } from 'src/app/components/mi-calendario/mi-calendario.component';

import { HorasDisponiblesPageRoutingModule } from './horas-disponibles-routing.module';

import { HorasDisponiblesPage } from './horas-disponibles.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    HorasDisponiblesPageRoutingModule
  ],
  declarations: [HorasDisponiblesPage,MiCalendarioComponent]
})
export class HorasDisponiblesPageModule {}
