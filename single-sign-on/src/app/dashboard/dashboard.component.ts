import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
