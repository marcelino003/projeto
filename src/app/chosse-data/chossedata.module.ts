import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChossedataPageRoutingModule } from './chossedata-routing.module';

import { ChossedataPage } from './chossedata.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ChossedataPageRoutingModule
  ],
  declarations: [ChossedataPage]
})
export class ChossedataPageModule {}
