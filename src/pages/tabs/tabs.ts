import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EspaceSecretairePage } from "../espace-secretaire/espace-secretaire";
import { MonCabinetPage } from "../mon-cabinet/mon-cabinet";
import { SettingsPage } from "../settings/settings";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html",
})
export class TabsPage {
  cabinetPage = MonCabinetPage;
  settingsPage = SettingsPage;
  espaceSecretairePage = EspaceSecretairePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TabsPage");
  }
}
