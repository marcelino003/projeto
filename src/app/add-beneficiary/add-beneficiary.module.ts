import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBeneficiaryPageRoutingModule } from './add-beneficiary-routing.module';

import { AddBeneficiaryPage } from './add-beneficiary.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddBeneficiaryPageRoutingModule
  ],
  declarations: [AddBeneficiaryPage]
})
export class AddBeneficiaryPageModule {}
