import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { Product } from 'src/app/model/Product';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.dataService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }
  addProduct(cart: Cart): void {
    this.cartService.addProducts(cart);
    alert('item added');
  }
}
