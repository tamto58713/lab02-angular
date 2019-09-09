import { Component,
     OnInit } from '@angular/core';

import { students } from '../students'
@Component({
  selector: 'app-students',
    
  templateUrl: './students.component.html',
    
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  listStudents = [...students]
  ngOnInit() {
  }

}
