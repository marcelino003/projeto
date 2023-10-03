import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanStatementPageRoutingModule } from './loan-statement-routing.module';

import { LoanStatementPage } from './loan-statement.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    LoanStatementPageRoutingModule
  ],
  declarations: [LoanStatementPage]
})
export class LoanStatementPageModule {}
