import { isFakeTouchstartFromScreenReader } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from "@angular/material/core";
import * as moment from 'moment';
import { AlertController, MenuController} from '@ionic/angular';
moment.locale('es-ES');


@Component({
  selector: 'app-mi-calendario',
  templateUrl: './mi-calendario.component.html',
  styleUrls: ['./mi-calendario.component.scss'],
})
export class MiCalendarioComponent implements OnInit {

  public fecha = moment();
  public messtr = this.fecha.format('MMMM');
  public mes = Number(this.fecha.format('M'));
  public ultimosDiasarr;
  public historial = [];
  public diaSeleccionado = 0;
  public horaSeleccionada;

  public dias;
  public innerWidth: any;


  public meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO",
  "JUNIO","JULIO","AGOSTO", "SEPTIEMBRE", "OCTUBRE", 
  "NOVIEMBRE", "DICIEMBRE"];

  public nomdias = ["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"];
  public diasarr = [];


  constructor(date: DateAdapter<Date>, public alertController: AlertController, private menu: MenuController) {
    // retorna 1 como primer día de la semana
    date.getFirstDayOfWeek = () => 1;
  }

  crearCalendario(mes)
  {
    let primerDia = moment(mes).startOf('M');
    let days = Array.apply(null,{length: mes.daysInMonth()+1})
               .map(Number.call, Number)
               .slice(1);
    for(let n=0; n < primerDia.weekday(); n++)
    {
      days.unshift(null);

    }
    return days;
  }
  public siguienteMes()
  {
    this.fecha.add(1,'M');
    this.dias = this.crearCalendario(this.fecha);
    this.messtr = this.fecha.format('MMMM');
  }
  public mesAnterior()
  {
    this.fecha.subtract(1,'M');
    this.dias = this.crearCalendario(this.fecha);
    this.messtr = this.fecha.format('MMMM');
  }

  public tamaño(tamaño){
    if (tamaño < 540){
      for (let i = 0; i<this.nomdias.length; i++){
        this.diasarr.push(this.nomdias[i].slice(0,1));
      }
    };
    if (tamaño > 540){
      for (let i = 0; i<this.nomdias.length; i++){
        this.diasarr.push(this.nomdias[i].slice(0,3));
      }
    }
  }

  public seleccionarDia(dia){
    this.diaSeleccionado= dia;
  }

  public seleccionarHora(i){
    this.horaSeleccionada = i;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmacion',
      message: "Se ha confirmado su hora para el "+this.diaSeleccionado+" de "+this.messtr+" a las "+this.horaSeleccionada,
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  public confirmarHora(){
    let confirmar = "Se ha confirmado su hora para el "+this.diaSeleccionado+" de "+this.messtr+" a las "+this.horaSeleccionada;
    this.historial.push(confirmar);
    console.log(confirmar);
  }

  openMenu(){
    this.menu.open();
  }

  ngOnInit() {
    this.dias = this.crearCalendario(this.fecha);
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    this.tamaño(innerWidth);
  }
}