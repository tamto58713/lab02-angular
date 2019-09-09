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

  listStudents = []
  onDeleteStudent(id) {
    let isDelete = confirm("Are you sure delete this student?")
    if (isDelete) {
      let temp = this.listStudents.filter(student => {
        return student.id !== id
      })
      this.listStudents = [...temp]
    }
  }

  ngOnInit() {
    this.listStudents = [...students]
  }
}
