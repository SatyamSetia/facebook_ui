import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginBtn: any;
  constructor() {
    this.loginBtn = {
      btnName: 'Login',
      btnClass: 'login-btn'
    }
  }

  ngOnInit() {
  }

}
