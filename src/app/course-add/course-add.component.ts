import { Component } from '@angular/core';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
courseTitle=""
courseDescription=""
courseDate=""
courseDuration=""
courseVenue=""


readValues = ()=>
{

  let data={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,
  "courseDate":this.courseDate,
  "courseDuration":this.courseDuration,
  "courseVenue":this.courseVenue
}

console.log(data)

}




}
