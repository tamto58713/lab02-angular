import { Component,
     OnInit } from '@angular/core';

import { students } from '../students'
@Component({
  selector: 'app-students',
    
  templateUrl: './students.component.html',
    
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  config: any;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '←',
      nextLabel: '→',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };
  
  constructor() {
    this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.listStudents.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  searchText
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

  pageOfItems: Array<any>;
  ngOnInit() {
    this.listStudents = students.map((student, i) => (student));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    pageOfItems = pageOfItems;
}
}
