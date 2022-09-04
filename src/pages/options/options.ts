import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
@Component({
selector: 'page-options',
templateUrl: './options.html'
})
export class OptionsPage {

    constructor(public navCtrl: NavController,
        private menuCtrl:MenuController) {}


        onToggleMenu() {
            this.menuCtrl.open();
        }
}