import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { 
    this.formLogin = this.fb.group({
      'name': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }
  async ingresar(){
    var f= this.formLogin.value;
    var user =JSON.parse(localStorage.getItem('user'));
    if(user.name == f.name && user.password ==f.password){
      console.log('Ingresar');

    }else{
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
