import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomerPageRoutingModule } from './welcomer-routing.module';

import { WelcomerPage } from './welcomer.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WelcomerPageRoutingModule
  ],
  declarations: [WelcomerPage]
})
export class WelcomerPageModule {}
