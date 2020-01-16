import { Component, OnInit } from '@angular/core';
import { COURSES } from '../../bd-data';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  courses: any;
  title: string;
  constructor() { }

  ngOnInit() {
  }

}