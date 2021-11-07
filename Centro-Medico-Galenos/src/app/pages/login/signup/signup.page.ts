import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formSignup: FormGroup;
  constructor(public fb: FormBuilder, public alertController:AlertController) {
    this.formSignup = this.fb.group({
      'name': new FormControl("",Validators.required),
      'rut': new FormControl("", Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmpassword': new FormControl("",Validators.required)
    });

   }

  ngOnInit() {
    class Usuario{
      id: number;
      pwd: String;
      nombre: String;
      rut: String;
      perfil: number;
      cm: number;
      espec: number
    }
  }

  async guardar(){
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
  
      await alert.present();

    }
    var user = {
      name: f.name,
      password: f.password
    }
    localStorage.setItem('user',JSON.stringify(user));
  }
}
