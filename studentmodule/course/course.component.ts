import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
count:number=0;
  constructor(private courseshare:ShareService) {

   }

  ngOnInit(): void {
  }

  sharedataa()
  {
this.count=this.count+1;
this.courseshare.sharecoursedata.next(this.count);
  }
}
