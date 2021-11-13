import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
value!:number;
  constructor(private sharecourse:ShareService) { 
this.sharecourse.sharecoursedata.subscribe(
  (data)=>
  {
    console.log(data);
    this.value=data;
  }
)  }

  ngOnInit(): void {
  }

}
