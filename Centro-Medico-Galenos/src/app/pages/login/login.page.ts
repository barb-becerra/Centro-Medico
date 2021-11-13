import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { CrudService } from 'src/app/servicios/crud.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  aux = 0;
  arrayUsuarios: any;
  usr: any
  formLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public usuarios: CrudService, private router: Router) {
    this.formLogin = this.fb.group({
      'name': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    });
    
  }

  getUsuarios() {
    this.usuarios.getUsuarios().then(data => {
      this.arrayUsuarios = data;
    })
  }

  ngOnInit() {
    this.getUsuarios();
  }

  async ingresar(pagina: String) {
    class Usuario {
      pwd: String;
      nombre: String;
      constructor(pwd, nombre) {
        this.pwd = pwd
        this.nombre = nombre
      }
    }
    console.log(this.arrayUsuarios)
    this.usr = new Usuario(this.formLogin.get('password').value, this.formLogin.get('name').value)
    for (let i = 0; i < this.arrayUsuarios.length; i++) {
      if (!(this.usr.nombre == this.arrayUsuarios[i].nombre && this.usr.pwd == this.arrayUsuarios[i].pwd)) {
        this.aux = 1
      }else{
        this.aux = 0;
        this.router.navigate([`${pagina}`]);
        break;
      }
    }
    if (this.aux == 1){
      const alert = await this.alertController.create({
        header: 'Error de Ingreso!',
        message: 'Usuario o contraseña incorrectos;)',
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
    }
  }
}