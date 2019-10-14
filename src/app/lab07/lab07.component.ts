import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab07',
  templateUrl: './lab07.component.html',
  styleUrls: ['./lab07.component.css']
})
export class Lab07Component implements OnInit {

  constructor() { }

  students = [
    {
      id: 1,
      name: "Nikola Tesla",
      birthday: "1856-10-07",
      mark: 10
    },
    {
      id: 2,
      name: "Albert Einstein",
      birthday: "1879-03-14",
      mark: 8
    },
    {
      id: 3,
      name: "Tam To Tran",
      birthday: "2000-07-06",
      mark: 9,
    }
  ]

  grade(mark) {
    return (mark > 8) ? "Good/Exellent" : ((mark > 5) ? "Medium/"  : "Poor")
  }

  isEdit
  isAdd
  currentStudent 

  onEdit(id) {
    this.isEdit = true
    this.isAdd = false
    this.currentStudent = {
      ...this.students.filter(student => {
                        return student.id === id
                      })[0] 
        }
  }

  onSave() {
    this.students = {...[...this.students.map(student => {
      if (student.id === this.currentStudent.id)
        return this.currentStudent
      return student
    })][0]}
    
    this.onCancel()
  }

  onCancel() {
    this.isEdit = false
    this.isAdd = false
  }

  add() {
    this.currentStudent = {
      id: this.students.length + 1,
      name: "",
      birthday: "",
      mark: 0
    }
    this.isAdd = true
    this.isEdit = false
  }

  onAdd() {
    this.students.push(this.currentStudent)
    this.onCancel()
  }

  onDelete(id) {
    let isDelete = confirm("Are you sure delete this student?") 
    if (isDelete)
      this.students = this.students.filter(student => {
        return student.id !== id
      })
  }
  ngOnInit() {
    this.isEdit =false
    this.isAdd = false
  }

  

}
