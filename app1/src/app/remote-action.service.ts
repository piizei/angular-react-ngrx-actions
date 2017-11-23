import { Injectable, NgZone } from '@angular/core';
import * as fromRoot from './reducers';
import { Store, Action } from '@ngrx/store';
import { NAVBAR_QUEUE } from '../public_api';

declare var PubSub: any;

@Injectable()
export class RemoteActionService {

  constructor(private store: Store<fromRoot.State>, private ngZone: NgZone ) {
    PubSub.subscribe( NAVBAR_QUEUE, (msg, action: Action) => {
      ngZone.run( () => store.dispatch(action));
    });
  }

}
