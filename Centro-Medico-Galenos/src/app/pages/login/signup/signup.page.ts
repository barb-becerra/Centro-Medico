import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formSignup: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formSignup = this.fb.group({
      'name': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmpassword': new FormControl("",Validators.required)
    });

   }

  ngOnInit() {
  }

}
