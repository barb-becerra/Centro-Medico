import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tomahoras2PageRoutingModule } from './tomahoras2-routing.module';

import { Tomahoras2Page } from './tomahoras2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tomahoras2PageRoutingModule
  ],
  declarations: [Tomahoras2Page]
})
export class Tomahoras2PageModule {}
