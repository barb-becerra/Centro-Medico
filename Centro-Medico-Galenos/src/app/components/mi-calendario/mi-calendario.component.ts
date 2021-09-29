import { Component, OnInit } from '@angular/core';
import { DateAdapter } from "@angular/material/core";


@Component({
  selector: 'app-mi-calendario',
  templateUrl: './mi-calendario.component.html',
  styleUrls: ['./mi-calendario.component.scss'],
})
export class MiCalendarioComponent implements OnInit {

  constructor(date: DateAdapter<Date>) {
    // retorna 1 como primer día de la semana
    date.getFirstDayOfWeek = () => 1;

    

  }

  ngOnInit() {}

}