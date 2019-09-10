import { Component, OnInit } from '@angular/core';
import { products  } from '../products'

@Component({
  selector: 'app-exercise04',
  templateUrl: './exercise04.component.html',
  styleUrls: ['./exercise04.component.css']
})
export class Exercise04Component implements OnInit {

  constructor() { }
  
  ngOnInit() {
    console.log(products);
  }
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  visibleImage = true;
  listProducts = [...products];

}
