import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullregisterPage } from './fullregister.page';

const routes: Routes = [
  {
    path: '',
    component: FullregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullregisterPageRoutingModule {}
