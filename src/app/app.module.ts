import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceCalenderComponent } from './space-calender/space-calender.component';
import { SpaceEventsComponent } from './space-events/space-events.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceCalenderComponent,
    SpaceEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
