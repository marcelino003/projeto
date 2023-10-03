import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyBankAtmPage } from './nearby-bank-atm.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyBankAtmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyBankAtmPageRoutingModule {}
