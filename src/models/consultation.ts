import { DateTime } from "ionic-angular";
import { Patient } from "./patient";

export class Consultation {
    patient:Patient;
    description:string;
    isActive:boolean;
    img:string;

    date:DateTime;
}