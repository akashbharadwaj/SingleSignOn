import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token') !== '' || localStorage.getItem('token') !== undefined) {
      this.router.navigate(['/dashboard']);
    }
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
      console.log(this.loginForm.value);
      if (this.loginForm.valid) {
        this.myservice.login(this.loginForm.value)
        .subscribe (
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/dashboard']);
          },
          error => { }
        );
      }
  }
}
