import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise01',
  templateUrl: './exercise01.component.html',
  styleUrls: ['./exercise01.component.css']
})
export class Exercise01Component implements OnInit {

  constructor() { }
  student = {
    name: "Van Teo Nguyen",
    birthday: "20/01/1999",
    gender: "Male",
    photo: "./assets/images/teo.jpg",
    mark: 8.5
  }
  ngOnInit() {
  }

}
