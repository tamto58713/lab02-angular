import { Component, OnInit } from '@angular/core';

import { products } from '../products'

@Component({
  selector: 'app-home-lab03',
  templateUrl: './home-lab03.component.html',
  styleUrls: ['./home-lab03.component.css']
})
export class HomeLab03Component implements OnInit {

  constructor() { }
  listProducts = []
  ngOnInit() {
    this.listProducts = [...products]
  }

}
