import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RemoteActionService } from './remote-action.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers})
  ],
  providers: [RemoteActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
