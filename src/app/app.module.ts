import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, APP_INITIALIZER } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { Hello } from './dummyProvider';
import { routes, FirstPage, FirstChildPage } from './routes';
import { CdComponentComponent  } from './components/cd-component/cd-component.component';
function initializeApp() {
  return () => {
    console.log("Before loading angular app, inder  ")
  }
}


@NgModule({
  declarations: [
    AppComponent,
    CounterInputComponent,
    FirstPage,
    FirstChildPage,
    CdComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [ 
    { provide: APP_INITIALIZER, useFactory: initializeApp, multi: true},  
    { provide: 'api', useValue: 'https://inders.in', multi: true},
    { provide: 'api', useValue: 'https://inders.in/about', multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
