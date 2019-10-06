import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sen4',
  templateUrl: './sen4.component.html',
  styleUrls: ['./sen4.component.css']
})
export class Sen4Component implements OnInit {

  constructor() { }

  isSalary
  name
  salary
  gender
  groupAge

  onChangeName() {
    this.name = this.name.trim()
  }

  onChangeGender(gender) {
    this.gender = gender
  }

  onChangeSalary() {
    if (parseInt(this.salary).toString() !== this.salary.toString()) {
      this.isSalary = false
      this.salary = ""
  }
    else {
      this.isSalary = true
      if (this.salary)
        this.salary = parseInt(this.salary)
      else
        this.salary = ""
    }
  }
  ngOnInit() {
    this.salary = ""
  }


}
