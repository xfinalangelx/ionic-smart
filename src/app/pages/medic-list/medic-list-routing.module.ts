import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicListPage } from './medic-list.page';

const routes: Routes = [
  {
    path: '',
    component: MedicListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicListPageRoutingModule {}
