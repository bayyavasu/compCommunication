import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { BranchComponent } from './branch/branch.component';



@NgModule({
  declarations: [
    CourseComponent,
    BranchComponent
  ],
  imports: [
    CommonModule
  ], 
   exports: [
    CourseComponent,
    BranchComponent
   ]
})
export class StudentmoduleModule { }
