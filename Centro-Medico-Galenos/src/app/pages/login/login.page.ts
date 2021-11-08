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
import { pickerController } from '@ionic/core';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  aux = 1;
  arrayUsuarios: any;
  usr: any
  formLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public usuarios: CrudService, router: Router) {
    this.formLogin = this.fb.group({
      'name': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    });
  }
  redireccionar(){
  }

  getUsuarios() {
    this.usuarios.getUsuarios().then(data => {
      this.arrayUsuarios = data;
    })
  }

  ngOnInit() {
    this.getUsuarios();
  }

  ingresar() {
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
        console.log("Ingreso correcto")
        this.redireccionar();
        break;
      }
    }
    if (this.aux == 0){
      console.log("Usuario incorrecto")
    }
  }
}