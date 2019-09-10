import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
@Component({
  selector: 'app-exercise04-detail-product',
  templateUrl: './exercise04-detail-product.component.html',
  styleUrls: ['./exercise04-detail-product.component.css']
})
export class Exercise04DetailProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }
  product;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('productId'))
      this.product = products.filter(product => {
        return product.productId === id
      })[0];
    });
  }

}
