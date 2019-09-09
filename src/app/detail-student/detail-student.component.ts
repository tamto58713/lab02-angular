import { Component, OnInit } from '@angular/core';
import { students } from '../students'
import { courses } from '../courses'
import { enrollments } from '../enrollments'
@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  constructor() { }
  student
  courses = {}
  enrollments
  id = 1;
  listStudents = [...students]
  listCourses = [...courses]
  listEnrollments = [...enrollments]
  ngOnInit() {
    this.student = this.listStudents.filter(student => {
      return student.id === this.id
    })[0]

    this.enrollments = this.listEnrollments.filter(enrollment => {
      return enrollment.studentId === this.id
    })

    for (let i = 0; i < enrollments.length; i++) {
      this.courses[enrollments[i].courseId] = this.listCourses.filter(course => {
        return course.courseId === enrollments[i].courseId
      })[0]
    }

  }
}