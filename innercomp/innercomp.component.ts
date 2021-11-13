import { Component, Input, OnInit, Output } from '@angular/core';
import{EventEmitter} from '@angular/core';
import { Student } from '../Student';
@Component({
  selector: 'app-innercomp',
  templateUrl: './innercomp.component.html',
  styleUrls: ['./innercomp.component.css']
})
export class InnercompComponent implements OnInit {

  constructor() { }
@Input()
  data!:string;
data1!:string;

num:number=2;
@Output()
dataEmitor:EventEmitter<number> =new EventEmitter<number>();
@Input()
students:Student[]=[];

@Output()
studentEmitor:EventEmitter<Student> =new EventEmitter<Student>();

selectstudent(student:Student)
{
this.studentEmitor.emit(student);
}

increament()
{
  this.num++;
  this.dataEmitor.emit(this.num);
}

hello()
{
  alert("hello");
}
  ngOnInit(): void {
  }

}
