import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gorod: string;
  strana: string;
  entered: boolean;
  constructor() { }

  items = []
  do(NewCity, NewCountry){
    this.items.push({city: NewCity, country: NewCountry})
  }

  ngOnInit() {
    this.gorod = 'Moscow';
    this.strana = 'Russia';
    this.entered = false;
  }

}
