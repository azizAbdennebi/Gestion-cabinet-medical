import { Subject } from "rxjs";
import { Patient } from "../models/patient";
import * as firebase from "firebase";

export class PatientsService {
  patients$ = new Subject<Patient[]>();
  patientsList: Patient[] = [
    {
      name:"aziz",
      lastName:"abd",
      age:22,
      img :"aa"
    }
  ];

  emitPatients() {
    this.patients$.next(this.patientsList);
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref("patient")
        .set(this.patientsList)
        .then(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  
  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref("patient")
        .once("value")
        .then(
          (data: any) => {
            this.patientsList = data.val();
            this.emitPatients();
            resolve("Données récupérées avec succès !");
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
