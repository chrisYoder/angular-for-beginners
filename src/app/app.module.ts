import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseCardComponent } from './course-card/course-card.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavBarComponent, CourseCardComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
