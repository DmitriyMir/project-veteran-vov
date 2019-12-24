import { Component, OnInit, Input, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() userName: string;
  constructor(){ this.log(`constructor`); }
  ngOnInit() { this.log(`onInit`); }

  ngOnDestroy() { this.log(`onDestroy`); }

  ngOnChanges() { this.log(`OnChanges`) }

  ngDoCheck() { this.log(`DoCheck`) }

  ngAfterContentInit() { this.log(`AfterContentInit`) }

  ngAfterContentChecked() { this.log(`AfterContentChecked`) }

  ngAfterViewInit() { this.log(`AfterViewInit`) }

  ngAfterViewChecked() { this.log(`AfterViewChecked`) }

  private log(msg: string) {
      console.log(msg);
  }

}
