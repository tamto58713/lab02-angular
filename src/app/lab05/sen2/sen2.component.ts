import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sen2',
  templateUrl: './sen2.component.html',
  styleUrls: ['./sen2.component.css']
})
export class Sen2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name
  salary
  gender
  groupAge
  onChangeGender(gender) {
    this.gender = gender
  }
}
