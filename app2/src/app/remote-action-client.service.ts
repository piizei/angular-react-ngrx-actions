import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { NAVBAR_QUEUE } from 'app1';

declare var PubSub: any;

@Injectable()
export class RemoteActionClientService {

  constructor() {}

  public dispatch(action: Action): void {
    PubSub.publish( NAVBAR_QUEUE, action);
  }

}
