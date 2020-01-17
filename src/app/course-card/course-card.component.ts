import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course:Course;
  @Input() cardIndex:Number;

  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();
    // if we want to reference a custom event from the component without keeping the same name then we put the name of the custom event as a string parameter for @Output
  
  ngOnInit() {
  }

  constructor() { }

  onCourseViewed() {
    console.log("card component - button clicked ...");
    this.courseEmitter.emit(this.course);
  }

}