import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {Location} from '@angular/common'; 

import { products } from '../products'

@Component({
  selector: 'app-datail-product',
  templateUrl: './datail-product.component.html',
  styleUrls: ['./datail-product.component.css']
})
export class DatailProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  product = {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      console.log(id)
      if (!id) {
        this.location.replaceState("/student/1")
        id = 1
      }

      this.product = products.filter(product => {
        return product.id === id
      })[0]
    })

  }
}
