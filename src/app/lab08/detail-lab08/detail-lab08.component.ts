import { Component, OnInit } from '@angular/core';
import { products } from "../guitar"
import { ActivatedRoute } from '@angular/router'; 
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-detail-lab08',
  templateUrl: './detail-lab08.component.html',
  styleUrls: ['./detail-lab08.component.css']
})
export class DetailLab08Component implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  products
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      console.log(id)
      if (!id) {
        this.location.replaceState("/lab08/detail/1")
        id = 1
      }

      this.products = products.filter(product => {
        return product.id === id
      })


    })
  }

}
