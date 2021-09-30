import { Component, OnInit } from '@angular/core';
import { StatusBarPlugin } from '@capacitor/status-bar';

@Component({
  selector: 'app-horas-disponibles',
  templateUrl: './horas-disponibles.page.html',
  styleUrls: ['./horas-disponibles.page.scss'],
})
export class HorasDisponiblesPage implements OnInit {

  // public doctores= [
  //   {
  //     "Nombre" : "Juan Perez",
  //     "Especialidad" : "Medicina General",
  //     "horas" : ["08:00", "16:00"]
  //   },
  //   {
  //     "Nombre" : "Ignacio Garcia",
  //     "Especialidad" : "Pediatra",
  //     "horas" : ["10:00", "18:00"]
  //   },
  //   {
  //     "Nombre" : "Maite Lopez",
  //     "Especialidad" : "Otorrinolaringologia",
  //     "horas" : ["12:00", "17:00"]
  //   },

  // ]

  constructor() { }

  ngOnInit() {
  }

}
