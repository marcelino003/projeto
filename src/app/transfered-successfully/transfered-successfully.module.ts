import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferedSuccessfullyPageRoutingModule } from './transfered-successfully-routing.module';

import { TransferedSuccessfullyPage } from './transfered-successfully.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    TransferedSuccessfullyPageRoutingModule
  ],
  declarations: [TransferedSuccessfullyPage]
})
export class TransferedSuccessfullyPageModule {}
