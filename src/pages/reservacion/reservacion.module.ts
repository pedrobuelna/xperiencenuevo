import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservacionPage } from './reservacion';

@NgModule({
  declarations: [
    ReservacionPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservacionPage),
  ],
})
export class ReservacionPageModule {}
