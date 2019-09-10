import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  myInfo = {
    firstName: "Tâm Tỏ",
    lastName: "Trần",
    birthday: "06/07/2000",
    phone: "355933881",
    email: "tamtotran5667@gmail.com",
    address: "Saigon",
  }
  ngOnInit() {
  }

}
