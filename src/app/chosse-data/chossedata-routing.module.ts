import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChossedataPage } from './chossedata.page';

const routes: Routes = [
  {
    path: '',
    component: ChossedataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChossedataPageRoutingModule {}
