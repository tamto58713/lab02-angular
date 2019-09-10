import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise03-cart',
  templateUrl: './exercise03-cart.component.html',
  styleUrls: ['./exercise03-cart.component.css']
})
export class Exercise03CartComponent implements OnInit {
  constructor() { }

  products = [
    {
      id: 'pd100',
      image: 'assets/images/laptop.jpg',
      name: 'Laptop',
      price: 10100000,
    },
    {
      id: 'pd101',
      image: 'assets/images/mobile.jpg',
      name: "Mobile",
      price: 5900000
    },
    {
      id: 'pd102',
      image: 'assets/images/telivision.jpg',
      name: 'Telivision',
      price: 15500000
    },
    {
      id: 'pd103',
      image: 'assets/images/headphone.jpg',
      name: 'Head Phone',
      price: 900000
    }
  ];
  quantities = {};
  temp = this.products.forEach(product => {
    this.quantities[product.id] = 0
    console.log(this.quantities)
  });

  onIncreaseQuantities(id) {
    let count = this.quantities[id];
    if (count < 20) {
    ++count;
    }
    this.quantities[id] = count;
  }
  onDecreaseQuantities(id) {
    let count = this.quantities[id];
    if (count > 0) {
    --count;
    }
    this.quantities[id] = count;
  }

  totalPrice() {
    let total = 0;
    for (let product of this.products) {
      total += product.price * this.quantities[product.id]
    }
    return total;
  }

  ngOnInit() {
  }

}
