import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendrierConsultationsPage } from './calendrier-consultations';

@NgModule({
  declarations: [
    CalendrierConsultationsPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendrierConsultationsPage),
  ],
})
export class CalendrierConsultationsPageModule {}
