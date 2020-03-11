import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
/**
 * Generated class for the EditarinfopersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarinfopersonal',
  templateUrl: 'editarinfopersonal.html',
})
export class EditarinfopersonalPage {
  formgroup:FormGroup;
  
  marca:AbstractControl;
  modelo:AbstractControl;
  color:AbstractControl;
  placas:AbstractControl;
  horaRecepcion:AbstractControl;
  sDefaultEmail   :  string;
  public marcaVal: string = 'Hyundai';
  public modeloVal: string = 'Sonata';
  public colorVal: string = 'Gris';
  public placasVal: string = 'JYW 234536';
  public horaRecepcionVal: string = '18:00 hrs';
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) {

    this.formgroup = formbuilder.group({
      marca:['',[Validators.required,Validators.minLength(5)]],
      modelo:['',[Validators.required,Validators.minLength(5)]],
      color:['',[Validators.required,Validators.minLength(3)]],
      placas:['',[Validators.required,Validators.minLength(5)]],
      horaRecepcion:['',[Validators.required,Validators.minLength(5)]]
    });
    this.marca = this.formgroup.controls["marca"];
    this.modelo = this.formgroup.controls["modelo"];
    this.color = this.formgroup.controls["color"];
    this.placas = this.formgroup.controls["placas"];
    this.horaRecepcion = this.formgroup.controls["horaRecepcion"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarinfopersonalPage');
  }

}
