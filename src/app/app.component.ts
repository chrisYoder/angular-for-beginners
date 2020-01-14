import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  data = {
    name: 'theCodingStoic',
    started: '01.14.2020', 
    course: 'Angular Core Deep Dive'
  }
}
