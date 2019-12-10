import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Barsik";

  constructor(private router: Router) {}
  goHome() {
    this.router.navigate([""]);
  }

  ngOnChanges() {
    
  }
  ngOnlit() {
    console.log('on init')
  }
}


