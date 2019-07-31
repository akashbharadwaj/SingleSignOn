import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }

  userName: string;
  password: string;
  login() {

    const login = {
      userName: this.userName,
      password: this.password
    };
    this.userService.userLogin(login)
      .subscribe(message => {
        if (message.msg) {
          this.router.navigate(['/app1']);
        } else {
          this.router.navigate(['/app2']);
        }
      });

  }
  ngOnInit() {
  }

}
