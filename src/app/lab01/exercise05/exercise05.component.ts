import { Component, OnInit } from '@angular/core';
import { employees } from '../employees'
@Component({
  selector: 'app-exercise05',
  templateUrl: './exercise05.component.html',
  styleUrls: ['./exercise05.component.css']
})
export class Exercise05Component implements OnInit {
  listEmployees = employees;
  constructor() { }
  ngOnInit() {
  }

}
