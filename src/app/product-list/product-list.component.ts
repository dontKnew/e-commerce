import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(){
    window.alert("shared onclick method");
  }

  onNotify(){
    window.alert("product is more than sale actual price ");
  }
}

