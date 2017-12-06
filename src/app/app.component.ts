import { Component, AfterViewChecked } from '@angular/core';
import { Hello } from './dummyProvider';
import { Inject } from '@angular/core';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myData = { name: "Hello" };
  times: number = 1;
  constructor() {

  }
  
  cd() {

  }
  updateData() {
    this.myData = { name: "Hello again!"};
    this.myData.name = "Hello again!" + this.times;
    this.times++;
    
  }

  ngAfterViewChecked() {
    // console.log('CD: AppComponent');
  }
}
