import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './global';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'single-sign-on';
  constructor(private router: Router, private globals: Globals) {

   }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.globals.status = false;
  }

  loggedIn() {
    if (localStorage.getItem('token') === null ) {
      return false;
    } else {
      return true;
    }
    // return this.globals.status;
  }
}

