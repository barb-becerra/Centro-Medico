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
      'password': new FormControl("",Validators.required),
      'confirmpassword': new FormControl("",Validators.required)
    });

   }

  ngOnInit() {
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
    }
    var user = {
      name: f.name,
      password: f.password
    }
    localStorage.setItem('user',JSON.stringify(user));
  }
}
