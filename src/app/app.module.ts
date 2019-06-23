import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDt16TZpXfDaxOU9G9udtCvVj7u_hYVFpo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
