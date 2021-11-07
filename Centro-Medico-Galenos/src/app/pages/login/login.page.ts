import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  arrayUsuarios: any;

  formLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public usuarios : CrudService) {
    this.getUsuarios();
    this.formLogin = this.fb.group({
      'name': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  getUsuarios(){
    this.usuarios.getUsuarios().then(data => {
      this.arrayUsuarios = data;
    })
  }


  ngOnInit() {
  }

  

  async ingresar() {
    var f = this.formLogin.value;
    var user = JSON.parse(localStorage.getItem('user'));
    if (user.name == f.name && user.password == f.password) {
      console.log('Ingresar');
      const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Sesion Iniciada!',
          message: 'En la futura versión verás tus opciones disponibles',
          buttons: [
          { 
            text: 'Entiendo!',
            handler: () => {
                console.log('Confirm Okay');
              }
          }
          ]
        });
    
        await alert.present();

    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Usuario no registrado!,  Por favor registrate antes de intentar iniciar sesion.',
        buttons: ['Entendido!']
      });

      await alert.present();
      return;
    }
  }
}
