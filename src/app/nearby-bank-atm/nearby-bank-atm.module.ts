import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyBankAtmPageRoutingModule } from './nearby-bank-atm-routing.module';

import { NearbyBankAtmPage } from './nearby-bank-atm.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NearbyBankAtmPageRoutingModule
  ],
  declarations: [NearbyBankAtmPage]
})
export class NearbyBankAtmPageModule {}
