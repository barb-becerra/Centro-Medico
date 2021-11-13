import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  usr: any;
  arrayUsuarios: any;
  formSignup: FormGroup;
  contador = 0;
  constructor(public fb: FormBuilder, public alertController:AlertController, public servicios : CrudService, private router: Router) {
    this.formSignup = this.fb.group({
      'name': new FormControl("",Validators.required),
      'rut': new FormControl("", Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmpassword': new FormControl("",Validators.required)
    });
   }

   getUsuarios() {
    this.servicios.getUsuarios().then(data => {
      this.arrayUsuarios = data;
    })
  }

  async guardar(){
     
    class Usuario{
      
      id: number;
      pwd: String;
      nombre: String;
      rut: String;
      perfil: number;
      cm: number;
      espec: number
    
      constructor(id, pwd, nombre, rut, perfil, cm, espec){
        this.id = id
        this.pwd = pwd
        this.nombre = nombre
        this.rut = rut
        this.perfil = perfil
        this.cm = cm
        this.espec = espec
      }
    }
    var f = this.formSignup.value;

    if(this.formSignup.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Todos los campos son requeridos!',
        buttons: ['Entendido!']
      });
  
      await alert.present();
      return;
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Usuario Registrado!',
        message: 'Ya puedes dirigirte a iniciar sesion! ;)',
        buttons: [
        { 
          text: 'Entiendo!',
          handler: () => {
              console.log('Confirm Okay');
            }
          } 
        ]
    });
      this.usr = new Usuario(this.arrayUsuarios.length + 1, this.formSignup.get('password').value,this.formSignup.get('name').value,this.formSignup.get('rut').value,1,1,1);
      this.servicios.postUsuario(this.usr);
      await alert.present();
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {
    this.getUsuarios();
    }

  }
