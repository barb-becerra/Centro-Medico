import { isFakeTouchstartFromScreenReader } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from "@angular/material/core";
import * as moment from 'moment';
moment.locale('es-ES');


@Component({
  selector: 'app-mi-calendario',
  templateUrl: './mi-calendario.component.html',
  styleUrls: ['./mi-calendario.component.scss'],
})
export class MiCalendarioComponent implements OnInit {

  public fecha = moment();
  public mes = this.fecha.format('MMMM');

  public dias;


  public meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO",
  "JUNIO","JULIO","AGOSTO", "SEPTIEMBRE", "OCTUBRE", 
  "NOVIEMBRE", "DICIEMBRE"];

  constructor(date: DateAdapter<Date>) {
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
  public nextmonth()
  {
    this.fecha.add(1,'M');
    this.dias = this.crearCalendario(this.fecha);
  }
  public previousmonth()
  {
    this.fecha.subtract(1,'M');
    this.dias = this.crearCalendario(this.fecha);

  }

  ngOnInit() {
    this.dias = this.crearCalendario(this.fecha);
  }
}