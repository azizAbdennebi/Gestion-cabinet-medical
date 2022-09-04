import { stringify } from "@angular/core/src/util";
import { NativeStorage } from "@ionic-native/native-storage";

export class nativeStorageCRUD {
  constructor(private nativeStorage: NativeStorage) {}

  /**
   * add
   */
  public add(json: JSON, collection: string) {
    if (
      collection == "medecin" ||
      collection == "patient" ||
      collection == "consultation"
    ) {
      this.nativeStorage.setItem(collection, JSON.stringify(json)).then(
        () => {
          console.log("Stored item!");
        },
        (error) => console.error("Error storing item", error)
      );
    } else {
      console.error("collection not found");
    }

    // if (
    //   collection == "medecin" ||
    //   collection == "patient" ||
    //   collection == "consultation"
    // ) {
    //   this.nativeStorage.setItem(collection, JSON.stringify(json)).then(
    //     () => console.log("Stored item!"),
    //     (error) => console.error("Error storing item", error)
    //   );
    // } else {
    //   console.error("collection not found");
    // }
  }

  /**
   * get
   */
  public get(collection: string) {
    var item: string;

    if (
      collection == "medecin" ||
      collection == "patient" ||
      collection == "consultation"
    ) {
      this.nativeStorage.getItem("my-identity-card").then(
        (data) => {
          console.log(data);
          return JSON.parse(data);
        },
        (error) => console.error(error)
      );
    } else {
      console.error("collection not found");
    }

    // if (
    //   collection == "medecin" ||
    //   collection == "patient" ||
    //   collection == "consultation"
    // ) {
    //   this.nativeStorage.getItem(collection).then(
    //     (data) => {
    //       console.log(data);
    //       return JSON.parse(data);
    //     },
    //     (error) => console.error(error)
    //   );
    // } else {
    //   console.error("collection not found");
    // }
  }
  /**
   * delete
   */
  public delete(collection: string) {
    if (
      collection == "medecin" ||
      collection == "patient" ||
      collection == "consultation"
    ) {
      this.nativeStorage.remove(collection);
    } else {
      console.error("collection not found");
    }
  }
  /**
   * deleteAll
   */
  public deleteAll() {
    this.delete("medecin");
    this.delete("patient");
    this.delete("consultation");
  }
}