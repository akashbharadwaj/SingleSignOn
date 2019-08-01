import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  // tslint:disable-next-line:ban-types
  successMessage: String = '';
  constructor(private myservice: MyserviceService, private router: Router) {
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, this.passValidator)
    });

    this.myForm.controls.password.valueChanges
    .subscribe (
      x => this.myForm.controls.confirmPassword.updateValueAndValidity()
    );
   }

  ngOnInit() {
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }
  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const confirmPassword = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== confirmPassword || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }

  register() {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      this.myservice.submitRegister(this.myForm.value)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'SOme error'
        );
    }
  }
}
