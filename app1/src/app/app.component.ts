import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers';
import * as layout from './actions/layout';
import {RemoteActionService} from './remote-action.service';

@Component({
  selector: 'app-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>
    <app-toggle [toggleState]="showNavBar$ | async" (toggleOn)="openNavBar()" (toggleOff)="closeNavBar()">
      Toggle nav-bar
    </app-toggle>
    <app-nav-bar [open]="showNavBar$ | async"></app-nav-bar>
  `
})
export class AppComponent {
  showNavBar$: Observable<boolean>;
  title = 'App 1';

  constructor(private store: Store<fromRoot.State>, private remoteActionService: RemoteActionService) {
    this.showNavBar$ = this.store.select(fromRoot.getShowNavBar);
  }

  openNavBar() {
    this.store.dispatch(new layout.OpenNavBar());
  }

  closeNavBar() {
    this.store.dispatch(new layout.CloseNavBar());
  }

}
