import { Component } from "@angular/core";
import {
  AlertController,
  IonicPage,
  //NavController,
 // NavParams,
} from "ionic-angular";


@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html",
})
export class SettingsPage {
  constructor(private alertCtrl: AlertController) {}
  onToggleLights() {
    let alert = this.alertCtrl.create({
      title: "Êtes-vous certain(e) de vouloir continuer ?",
      subTitle:
        "Cette action allumera ou éteindra toutes les lumières de la maison !",
      buttons: [
        {
          text: "Annuler",
          role: "cancel",
        },
        {
          text: "Confirmer",
          handler: () => console.log("Confirmé !"),
        },
      ],
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }
}
