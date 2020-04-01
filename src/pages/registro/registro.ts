import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { DataProvider } from '../../providers/data/data'
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder,
    public dataP: DataProvider) {
      if(this.dataP.dataX == 0){
        this.nombreVal = '';
        this.apellidosVal = '';
        this.sexoVal = '';
        this.fechaNacimientoVal = '';
        this.correoElectronico = '';
        this.numerosTelefonoVal = '';
      }
    this.formgroup = formbuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      apellidos:['',[Validators.required,Validators.minLength(5)]],
      sexo:['',[Validators.required,Validators.minLength(5)]],
      fechaNacimiento:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      numeroTelefono:['',[Validators.required,Validators.minLength(5)]]
    });
    this.name = this.formgroup.controls["nameVal"];
    this.apellidos = this.formgroup.controls["apellidosVal"];
    this.sexo = this.formgroup.controls["fechaNacmientoVal"];
    this.fechaNacimiento = this.formgroup.controls["fechaNacimientoVal"];
    this.numeroTelefono = this.formgroup.controls["numeroTelefonoVal"];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  onclickMenu(){
    this.navCtrl.push("MenuprincipalPage")
  }
  onclickActividades(){
    this.navCtrl.push("PlayasPage")
  }
  onclickContact(){
    this.navCtrl.push("ContactoPage")
  }
  onclickLlaves(){
    this.navCtrl.push("LlavesPage")
  }
  onclickRegistro(){
    this.navCtrl.push("RegistroPage")
  }
  onclickLogin(){
    this.navCtrl.push("LoginPage")
  }
  onclickGuardar(){
    this.dataP.dataX = 1;
    this.navCtrl.push("MenuPage")
  }
}
