import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThumbImpressionPageRoutingModule } from './thumb-impression-routing.module';

import { ThumbImpressionPage } from './thumb-impression.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ThumbImpressionPageRoutingModule
  ],
  declarations: [ThumbImpressionPage]
})
export class ThumbImpressionPageModule {}
