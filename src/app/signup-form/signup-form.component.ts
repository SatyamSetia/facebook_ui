import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupBtn: any;
  constructor() {
    this.signupBtn = {
      btnName: 'Signup',
      btnClass: 'signup-btn'
    }
  }

  ngOnInit() {
  }

}
