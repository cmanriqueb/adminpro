import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

@ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() title: string = 'Title';
  @Input() progress: number = 50;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChages( newValue: number) {
    // let elementHTML: any = document.getElementsByName('progress')[0];

    if ( newValue >= 100 ) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    // elementHTML.value =  this.progress;
    this.txtProgress.nativeElement.value = this.progress;
    this.valueChange.emit(this.progress);
  }

  changePValue(x: number) {
    if (this.progress >= 100 && x > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && x < 0) {
      this.progress = 0;
      return;
    }
  this.progress += x;
  this.valueChange.emit(this.progress);
  this.txtProgress.nativeElement.focus();
  }

}
