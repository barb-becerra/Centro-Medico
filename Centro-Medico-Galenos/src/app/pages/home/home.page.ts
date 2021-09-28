import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alerta: AlertController) {}
  //funcion alerta
  async AlertaPagina(){
  let Alert = await this.alerta.create({
    header:'Mensaje de alerta',
    message: 'Plataforma aún no se encuentra disponible',
    buttons: ['Entendido']
  });
Alert.present();
  }

}
