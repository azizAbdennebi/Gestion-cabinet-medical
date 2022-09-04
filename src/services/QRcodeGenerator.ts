import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";

// export class cameraImages {
//   image = "";

//   constructor(public navCtrl: NavController, public camera: Camera) {}

//   async addPhoto(source: string) {
//     if (source === "camera") {
//       console.log("camera");
//       const cameraPhoto = await this.openCamera();
//       this.image = "data:image/jpg;base64," + cameraPhoto;
//     } else {
//       console.log("library");
//       const libraryImage = await this.openLibrary();
//       this.image = "data:image/jpg;base64," + libraryImage;
//     }
//   }
// }

export class qrCodeGenerator {
  //   image = "";
  //text :string;
  constructor(private qrScanner: QRScanner) {}
  /**
   * name
   */
  public scan() {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log("Scanned something", text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning

            return text;
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log("Error is", e));
  }
}