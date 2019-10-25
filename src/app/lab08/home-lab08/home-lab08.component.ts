import { Component, OnInit } from '@angular/core';
import { products } from "../guitar"
@Component({
  selector: 'app-home-lab08',
  templateUrl: './home-lab08.component.html',
  styleUrls: ['./home-lab08.component.css']
})
export class HomeLab08Component implements OnInit {

  constructor() { }
  products = [...products]
  ngOnInit() {
    
  }

}
