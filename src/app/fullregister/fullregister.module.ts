import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullregisterPageRoutingModule } from './fullregister-routing.module';

import { FullregisterPage } from './fullregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullregisterPageRoutingModule
  ],
  declarations: [FullregisterPage]
})
export class FullregisterPageModule {}
