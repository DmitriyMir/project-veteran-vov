import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],

})

export class NotFoundComponent implements OnInit {
  myDate = Date.now();
  Number1: number = 2019.343476386448;
  Message1: string = "Angular is awesome!";
  Message2: string = "angular";
  Message3: string = "AWESOME";
  constructor() { }

  ngOnInit() {
  }

}
