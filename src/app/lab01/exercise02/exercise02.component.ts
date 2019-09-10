import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02',
  templateUrl: './exercise02.component.html',
  styleUrls: ['./exercise02.component.css']
})
export class Exercise02Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students = [
    {
      id: 1,
      name: "Van Teo Nguyen",
      birthday: "20/01/1999",
      gender: "Male",
      mark: 8.5,
      imageUrl: 'assets/images/teo.jpg'
    },
    {
      id: 2,
      name: "Shizuka Chan",
      birthday: "20/12/1999",
      gender: "Female",
      mark: 8,
      imageUrl: 'assets/images/shizuka.jpg'
    },
    {
      id: 3,
      name: "Robert Tesla",
      birthday: "20/01/200",
      gender: "Male",
      mark: 9.5,
      imageUrl: 'assets/images/tesla.jpg'
    }
  ]

}
