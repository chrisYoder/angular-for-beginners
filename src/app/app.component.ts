import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  // data = {
  //   name: 'theCodingStoic',
  //   started: '01.14.2020', 
  //   course: 'Angular Core Deep Dive'
  // }

  

  // onLogoClicked() {
  //   alert('Hello World');
  // }

  // onKeyUp(newTitle: string){
  //   this.data.course = newTitle;
  // }

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  onCardClicked() {
    console.log('App component- click event bubbled.');
  }
}
