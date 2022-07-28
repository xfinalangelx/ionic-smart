import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicListPageRoutingModule } from './medic-list-routing.module';

import { MedicListPage } from './medic-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicListPageRoutingModule
  ],
  declarations: [MedicListPage]
})
export class MedicListPageModule {}
