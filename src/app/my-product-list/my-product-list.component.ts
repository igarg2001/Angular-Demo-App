import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-my-product-list',
  templateUrl: './my-product-list.component.html',
  styleUrls: ['./my-product-list.component.css'],
})
export class MyProductListComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit(): void {}

  share() {
    window.alert('This product has been shared!');
  }
  onNotify() {
    window.alert("You will be notified when this product goes on sale!");
  }
}
