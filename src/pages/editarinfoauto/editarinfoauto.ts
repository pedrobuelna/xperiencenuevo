import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
/**
 * Generated class for the EditarinfoautoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarinfoauto',
  templateUrl: 'editarinfoauto.html',
})
export class EditarinfoautoPage {
  formgroup:FormGroup;
  
  name:AbstractControl;
  apellidos:AbstractControl;
  sexo:AbstractControl;
  fechaNacimiento:AbstractControl;
  email:AbstractControl;
  numeroTelefono:AbstractControl;
  sDefaultEmail   :  string;
  public nombreVal: string = 'Barbie';
  public apellidosVal: string = 'Martinez Rojas';
  public sexoVal: string = 'Mujer';
  public fechaNacimientoVal: string = '1975-12-06';
  public correoElectronico: string = 'barbiellah@icloud.com';
  public numerosTelefonoVal: string = '+52 1068 6766';
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) {

    this.formgroup = formbuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      apellidos:['',[Validators.required,Validators.minLength(5)]],
      sexo:['',[Validators.required,Validators.minLength(5)]],
      fechaNacimiento:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      numeroTelefono:['',[Validators.required,Validators.minLength(5)]]
    });
    this.name = this.formgroup.controls["name"];
    this.apellidos = this.formgroup.controls["apellidos"];
    this.sexo = this.formgroup.controls["fechaNacmiento"];
    this.fechaNacimiento = this.formgroup.controls["fechaNacimiento"];
    this.numeroTelefono = this.formgroup.controls["numeroTelefono"];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarinfoautoPage');
  }

}
