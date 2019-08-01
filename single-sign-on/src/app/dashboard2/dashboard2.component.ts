import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  username = '';
  constructor(private myservice: MyserviceService, private router: Router) {
    this.myservice.getUserName()
    .subscribe(
      data => this.username = data.toString(),
      error => this.router.navigate(['/login'])
    );
   }


  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
