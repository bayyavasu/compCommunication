import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { InnercompComponent } from './innercomp/innercomp.component';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compcommunicationtest';
  data1="property";

  dataListener1(data:number)
  {
    alert(data);
  }

  studentListener1(student:Student)
  {
    console.log(student);
  }

  students:Student[]=[{id:1,name:"vasu",age:23}];

@ViewChild("ourdata")
divdata!:ElementRef;

@ViewChild("ourdata1")
divdata1!:ElementRef;

@ViewChild(InnercompComponent)
childelement!:InnercompComponent;

changecontent()

{
  this.childelements.forEach(element =>
    {
      element.increament();
    })
  this.divdata.nativeElement.innerText="updated";
  this.divdata1.nativeElement.innerHTML="<h1>updated</h1>";
  this.divdata1.nativeElement.style.backgroundColor='yellow'; 
  this.divdata1.nativeElement.style.borderStyle="solid";
  this.divdata1.nativeElement.style.borderColor="red";
  this.childelement.increament(); 
}



@ViewChildren(InnercompComponent)
childelements:QueryList<InnercompComponent>=new QueryList();









}