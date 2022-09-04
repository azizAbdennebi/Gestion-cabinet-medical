import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patient } from '../../models/patient';


@IonicPage()
@Component({
  selector: 'page-fiche-patient',
  templateUrl: 'fiche-patient.html',
})
export class FichePatientPage {

  @Input()
  patient:Patient;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.patient = this.navParams.get('patient');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichePatientPage');
  }

}
