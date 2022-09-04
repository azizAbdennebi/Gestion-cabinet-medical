import { Component, NgModule } from "@angular/core";
import {
  LoadingController,
  MenuController,
  ModalController,
  NavController,
  NavParams,
  ToastController,
} from "ionic-angular";
import { Subscription } from "rxjs";
import { Patient } from "../../models/patient";
import { PatientsService } from "../../services/patient.service";

@Component({
  selector: "page-patients",
  templateUrl: "patients.html",
})


export class PatientsPage {
  
  patientsList:Patient[];
  patientsSubscription: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private patientsService: PatientsService,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PatientsPage");
    this.patientsList=this.patientsList;
  }

  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: "Sauvegarde en cours…",
    });
    loader.present();
    this.patientsService.saveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl
          .create({
            message: "Données sauvegardées !",
            duration: 3000,
            position: "bottom",
          })
          .present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl
          .create({
            message: error,
            duration: 3000,
            position: "bottom",
          })
          .present();
      }
    );
  }

  onFetchList() {
    let loader = this.loadingCtrl.create({
      content: "Récuperation en cours…",
    });
    loader.present();
    this.patientsService.retrieveData().then(
      () => {
        console.log(this.patientsService.patientsList);
        loader.dismiss();
        this.toastCtrl
          .create({
            message: "Données récupérées !",
            duration: 3000,
            position: "bottom",
          })
          .present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl
          .create({
            message: error,
            duration: 3000,
            position: "bottom",
          })
          .present();
      }
    );
  }

  ngOnInit() {
    this.patientsSubscription = this.patientsService.patients$.subscribe(
    (patients: Patient[]) => {
    this.patientsList = patients;
    }
    );
    this.patientsService.emitPatients();
    console.log("ah ah => "+this.patientsList.forEach((p)=>{
      console.log(p.name);
    }));
    }
    

    ngOnDestroy() {
      this.patientsSubscription.unsubscribe();
      }
}
