import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkybarPage } from './skybar';

@NgModule({
  declarations: [
    SkybarPage,
  ],
  imports: [
    IonicPageModule.forChild(SkybarPage),
  ],
})
export class SkybarPageModule {}
