import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sen102',
  templateUrl: './sen102.component.html',
  styleUrls: ['./sen102.component.css']
})
export class Sen102Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.errs = []
    this.result = ""
  }

  mark
  name
  birthday
  gender
  result
  errs
  onSubmit() {
    this.errs = []
    this.result = ""
    if (!this.name)
      this.errs.push("Name is required!")
    if (!this.birthday)
      this.errs.push("Birthday is required!")
    if (!this.gender)
      this.errs.push("Gender is required!")
    if (!this.mark)
      this.errs.push("Mark is required")
    if (parseInt(this.mark) > 10 || parseInt(this.mark) < 0)
      this.errs.push("Wrong Mark!")
    if (this.errs.length === 0) {
      if (parseInt(this.mark) >= 5)
        this.result = "Passed"
        else
        this.result = "Failed"
    }
  }

}
