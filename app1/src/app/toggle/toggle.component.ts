import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <button class="toggle" (click)="toggle()">
      <ng-content></ng-content>
    </button>
  `,
  styles: ['.toggle {background-color: darkseagreen; font-family: "Comic Sans MS"}']
})
export class ToggleComponent implements OnInit {

  @Output() toggleOff = new EventEmitter();
  @Output() toggleOn = new EventEmitter();
  @Input() toggleState: Boolean = true;

  toggle() {
    this.toggleState ? this.toggleOff.emit() : this.toggleOn.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
