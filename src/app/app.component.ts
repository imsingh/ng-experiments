import { Component } from '@angular/core';
import { Hello } from './dummyProvider';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(hello: Hello) {
    // console.log(hello);
  }
}
