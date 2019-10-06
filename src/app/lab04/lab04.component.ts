import { Component, OnInit } from '@angular/core';
import { products } from './products'
@Component({
  selector: 'app-lab04',
  templateUrl: './lab04.component.html',
  styleUrls: ['./lab04.component.css']
})
export class Lab04Component implements OnInit {

  config: any;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  pageOfItems: Array<any>;
  pageChanged(event){
    this.config.currentPage = event;
  }

  constructor() {
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: products.length
  };
  }

  listProducts = []
  orderName = "name"

  ngOnInit() {
    this.listProducts = [...products]
  }

    onGetFirstPage() {
      this.config = {...this.config, currentPage: 1}
    }

    onPrevPage() {
      if (this.config.currentPage > 1)
        this.config = {...this.config, currentPage: --this.config.currentPage}
    }
    onNextPage() {
      if (this.config.currentPage < (this.config.totalItems / this.config.itemsPerPage))
        this.config = {...this.config, currentPage: ++this.config.currentPage}
    }

    onGetLastPage() {
      this.config = {...this.config, currentPage: (this.config.totalItems / this.config.itemsPerPage)}
    }
    
    ceil(number) {
      return Math.ceil(number)
    }

    changeOrderBy(orderName) {
      this.orderName = orderName;
    }
}
