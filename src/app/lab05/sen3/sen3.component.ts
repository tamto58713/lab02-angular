import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sen3',
  templateUrl: './sen3.component.html',
  styleUrls: ['./sen3.component.css']
})
export class Sen3Component implements OnInit {

  constructor() { }


  checked = {}

  quantity = {}

  total = 0
  ngOnInit() {
    this.products.map(product => {
      this.checked[product.id] = false
      this.quantity[product.id] = 0
    })
  }

  onChange(id) {
    console.log(parseInt(this.quantity[id]))
    if (!parseInt(this.quantity[id]))
      this.quantity[id] = 0
    else
      this.quantity[id] = parseInt(this.quantity[id])

    this.total = this.products.reduce((a, b) => {
      return a + b.price * this.quantity[b.id]
    }, 0)
  }
  products = [
    {
      id: 1,
      name: "Soft Drink",
      price: 10000
    },
    {
      id: 2,
      name: "Black Coffee",
      price: 20000
    },
    {
      id: 3,
      name: "Coca Cola",
      price: 12000
    },
    {
      id: 4,
      name: "Number One",
      price: 13000
    }
  ]


}
