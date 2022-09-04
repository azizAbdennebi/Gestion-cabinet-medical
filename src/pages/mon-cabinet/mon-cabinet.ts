import { Component } from '@angular/core';
import { MenuController, ModalController, NavController } from 'ionic-angular';
import { Consultation } from '../../models/consultation';
import { ConsultationsService } from '../../services/consultation.service';
import { SettingsPage } from '../settings/settings';


import { FichePatientPage } from '../fiche-patient/fiche-patient';
import { Patient } from '../../models/patient';
;
@Component({
selector: 'page-appareils',
templateUrl: 'mon-cabinet.html'
})
export class MonCabinetPage {
    consultationsList: Consultation[];

    constructor(public navCtrl: NavController,
        private menuCtrl:MenuController,
        private modalCtrl: ModalController,private consultationsService:ConsultationsService) {}

    ionViewWillEnter() {
        this.consultationsList = this.consultationsService.consultationsList;
        
        }

        onToggleMenu() {
            this.menuCtrl.open();
            }

    onLoadPatient(patient: Patient) {
            // push to the page (method1)
            //this.navCtrl.push(SingleAppareilPage, {appareil: appareil});
            //this.calendar.openCalendar(new Date());
            // creating a modal (add it to the pages stack) (method2)
            let modal = this.modalCtrl.create(FichePatientPage, {patient: patient});
            modal.present();
            
    }
}