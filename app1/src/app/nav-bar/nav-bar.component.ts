import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <div *ngIf="open">
      <p>
          Container for serious nav-bar stuff!
      </p>
    </div>
  `,
})
export class NavBarComponent implements OnInit {

  constructor() { }

  @Input() open = false;

  ngOnInit() {
  }

}
