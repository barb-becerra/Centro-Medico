import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
})
export class EspecialidadesPage implements OnInit {

  constructor(public mensajeEn: AlertController, public cancelar: AlertController) {}

  ngOnInit() {
  }

    //funcion alerta
    async mensajeEnviado(){
      let Alert = await this.mensajeEn.create({
        message: 'Solicitud enviada',
        buttons: ['Entendido']
      });
    Alert.present();
      }
 

}
