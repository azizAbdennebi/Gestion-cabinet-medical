import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MonCabinetPage } from "../pages/mon-cabinet/mon-cabinet";
import { TabsPage } from "../pages/tabs/tabs";
import { SettingsPage } from "../pages/settings/settings";
import { CalendarModule } from "ionic3-calendar-en";
import { CalendrierConsultationsPage } from "../pages/calendrier-consultations/calendrier-consultations";
import { ConsultationsService } from "../services/consultation.service";
import { OptionsPage } from "../pages/options/options";
import { AddConsultationFormPage } from "../pages/add-consultation-form/add-consultation-form";
import { AuthPage } from "../pages/auth/auth";
import { AuthService } from "../services/auth.service";
import { PatientsService } from "../services/patient.service";
import { EspaceSecretairePage } from "../pages/espace-secretaire/espace-secretaire";
import { PatientsPage } from "../pages/patients/patients";
import { FichePatientPage } from "../pages/fiche-patient/fiche-patient";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MonCabinetPage,
    TabsPage,
    SettingsPage,
    CalendrierConsultationsPage,
    OptionsPage,
    AddConsultationFormPage,
    AuthPage,
    EspaceSecretairePage,
    PatientsPage,
    FichePatientPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), CalendarModule],
  bootstrap: [IonicApp],
  entryComponents: [
    AddConsultationFormPage,
    AuthPage,
    MyApp,
    HomePage,
    MonCabinetPage,
    TabsPage,
    SettingsPage,
    CalendrierConsultationsPage,
    OptionsPage,
    EspaceSecretairePage,
    PatientsPage,
    FichePatientPage
  ],
  providers: [
    StatusBar,
    ConsultationsService,
    AuthService,
    PatientsService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
  // exports: [PatientsPage,FichePatientPage],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
