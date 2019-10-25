import { Component, OnInit } from '@angular/core';
import { products } from "../guitar"
@Component({
  selector: 'app-checkout-lab08',
  templateUrl: './checkout-lab08.component.html',
  styleUrls: ['./checkout-lab08.component.css']
})
export class CheckoutLab08Component implements OnInit {

  constructor() { }
  products = [products[0]]
  ngOnInit() {
  }

}
