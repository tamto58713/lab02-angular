import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sen101',
  templateUrl: './sen101.component.html',
  styleUrls: ['./sen101.component.css']
})
export class Sen101Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.length = 0
    this.width = 0
   
  }

  length
  width

  onLengthChange(length) {
    if (parseInt(length) || length === "0")
      this.length = parseInt(length)
  } 

  onWidthChange(width) {
    if (parseInt(width) || width === "0")
      this.width = parseInt(width)
  }
}
