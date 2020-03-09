import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LlavesPage } from './llaves';

@NgModule({
  declarations: [
    LlavesPage,
  ],
  imports: [
    IonicPageModule.forChild(LlavesPage),
  ],
})
export class LlavesPageModule {}
