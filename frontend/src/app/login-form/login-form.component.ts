import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService) {
    this.username = '';
    this.password = '';
  }

  login() {
    console.log('this.username, this.password');
    // @ts-ignore
    this.username = document.getElementById('username-input').value;
    // @ts-ignore
    this.password = document.getElementById('password-input').value;

    try {
      const token = this.loginService.login(this.username, this.password);
      if (token) {
        // @ts-ignore
        localStorage.setItem('token', token);
        localStorage.setItem("logged", "true");
      }

    } catch (error) {
      localStorage.removeItem("token");
      localStorage.setItem("logged", "false");
    }

    console.log(this.username, this.password);
    // this.loginService.login(this.username, this.password).subscribe((data) => {
    //   localStorage.setItem('token', data.token)
    // });

    // this.logged = true;
    this.username = '';
    this.password = '';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.setItem("logged", "false");
  }

  ngOnInit(): void {
  }

}
