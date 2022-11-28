import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes = [
  {path:"",component:CourseAddComponent},
  {path:"add",component:CourseAddComponent},
  {path:"view",component:CourseViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CourseAddComponent,
    NavBarComponent,
    CourseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
