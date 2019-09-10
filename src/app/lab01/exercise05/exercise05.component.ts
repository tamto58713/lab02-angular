import { Component, OnInit } from '@angular/core';
import { employees } from '../employees'
@Component({
  selector: 'app-exercise05',
  templateUrl: './exercise05.component.html',
  styleUrls: ['./exercise05.component.css']
})
export class Exercise05Component implements OnInit {
  listEmployees = employees;
  searchText
  config: any;
  constructor() { 
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: employees.length
  };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
  }

}
