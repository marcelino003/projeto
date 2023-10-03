import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundTransferOptionsPageRoutingModule } from './fund-transfer-options-routing.module';

import { FundTransferOptionsPage } from './fund-transfer-options.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FundTransferOptionsPageRoutingModule
  ],
  declarations: [FundTransferOptionsPage]
})
export class FundTransferOptionsPageModule {}
