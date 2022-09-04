import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consultation } from '../../models/consultation';


@IonicPage()
@Component({
  selector: 'page-calendrier-consultations',
  templateUrl: 'calendrier-consultations.html',
})
export class CalendrierConsultationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  consultations:Consultation[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendrierConsultationsPage');
  }

  dateMulti: string[];
  type: 'string';
  
  currentEvents = [
    {
      year: 2022,
      month: 3,
      date: 8
    },
    {
      year: 2022,
      month: 3,
      date: 7
    }
  ];
  

}
