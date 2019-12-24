import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  entered: boolean;
  constructor() { }

  ngOnInit() {
    this.login = 'admin1';
    this.password = 'admin';
    this.entered = false;
  }
  MakeLogin() {
    if (this.login === 'admin1' && this.password === 'admin') {
      console.log(' Вы вошли');
      this.entered = true;
    } else {
      const pass = localStorage.getItem(this.password);
      const log = localStorage.getItem(this.login);
      if (log === this.login && pass === this.password) {
        console.log(' Вы вошли');
        this.entered = true;
      } else {
        this.entered = false;
        localStorage.setItem(this.login, this.login);
        localStorage.setItem(this.password, this.password);
      }
    }
  }
}