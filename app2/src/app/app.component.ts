import { Component } from '@angular/core';
import {OPEN_NAVBAR} from 'app1';
import {RemoteActionClientService} from './remote-action-client.service';

@Component({
  selector: 'app-2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App 2';

  constructor(private remoteActionService: RemoteActionClientService) {}

  showRemoteNavBar() {
    this.remoteActionService.dispatch({type: OPEN_NAVBAR});
  }
}
