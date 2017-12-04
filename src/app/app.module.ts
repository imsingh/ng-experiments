import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { Hello } from './dummyProvider';

function dummyFactory() {
  return "Hello Factory";
}

@Injectable()
class AClass {
  constructor () {
    console.log('Hello AClass');
  }
}



@NgModule({
  declarations: [
    AppComponent,
    CounterInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ 
    { provide: AClass, useClass: AClass },
    { provide: Hello, useExisting: AClass  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
