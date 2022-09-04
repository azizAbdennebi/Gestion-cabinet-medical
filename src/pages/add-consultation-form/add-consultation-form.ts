import { FormArray, NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-add-consultation-form',
  templateUrl: 'add-consultation-form.html',
})
export class AddConsultationFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddConsultationFormPage');
  }

  consultationForm: FormGroup;

  initForm() {
    this.consultationForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: this.formBuilder.array([])
    });
    }

    ngOnInit() {
      this.initForm();
    }

    getDescriptionArray() {
      return this.consultationForm.get('description') as FormArray;
      }

    onAddDescription() {
        let newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);
        }
}
