import { Component, ViewChild } from "@angular/core";
import { MenuController, NavController, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TabsPage } from "../pages/tabs/tabs";
import { OptionsPage } from "../pages/options/options";
import { HomePage } from "../pages/home/home";
import { initializeApp } from "firebase/app";
import { AuthPage } from "../pages/auth/auth";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  isAuth: boolean = false;
  rootPage: any = HomePage;
  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  @ViewChild("content") content: NavController;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      const firebaseConfig = {
        apiKey: "AIzaSyDoKezgqyiDD4llXo6LhG0iczqQijRPSOo",
        authDomain: "gestioncabinetmedical-70099.firebaseapp.com",
        databaseURL: "https://gestioncabinetmedical-70099-default-rtdb.firebaseio.com",
        projectId: "gestioncabinetmedical-70099",
        storageBucket: "gestioncabinetmedical-70099.appspot.com",
        messagingSenderId: "207519862685",
        appId: "1:207519862685:web:c8b3b6992c738f997ba974",
        measurementId: "G-YS4T97YEHL",
      };
      // Initialize Firebase
      const firebase = initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.isAuth = true;
          this.content.setRoot(TabsPage);
        } else {
          this.isAuth = false;
          this.content.setRoot(AuthPage, { mode: "connect" });
        }
      });
    });
  }
  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}
