import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RemoteActionClientService } from './remote-action-client.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RemoteActionClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
