import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpsPageRoutingModule } from './imps-routing.module';

import { ImpsPage } from './imps.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ImpsPageRoutingModule
  ],
  declarations: [ImpsPage]
})
export class ImpsPageModule {}
