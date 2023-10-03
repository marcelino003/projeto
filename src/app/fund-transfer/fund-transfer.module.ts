import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundTransferPageRoutingModule } from './fund-transfer-routing.module';

import { FundTransferPage } from './fund-transfer.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FundTransferPageRoutingModule
  ],
  declarations: [FundTransferPage]
})
export class FundTransferPageModule {}
