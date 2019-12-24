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
  constructor() { }

  ngOnInit() {
    this.login = 'admin1';
    this.password = 'admin';
  }
  MakeLogin() {
    if (this.login == 'admin1' && this.password == 'admin') {
      console.log(' Вы вошли')
    }
  }
}
