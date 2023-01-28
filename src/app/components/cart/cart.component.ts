import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/model/Cart';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/Order';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Cart[] = [];
  total: number = 0;
  name: string = '';
  adress: string = '';
  card: string = '';
  order: Order = new Order();
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cartProducts = <Cart[]>this.cartService.getProducts();
    console.log(this.cartProducts);
    this.total = this.getTotal();
  }
  handleMinus(name: string) {
    for (let index = 0; index < this.cartProducts.length; index++) {
      if (this.cartProducts[index].name == name) {
        this.cartProducts[index].amount--;
      }
    }
  }

  handlePlus(name: string) {
    for (let index = 0; index < this.cartProducts.length; index++) {
      if (this.cartProducts[index].name == name) {
        this.cartProducts[index].amount++;
      }
    }
  }

  getTotal(): number {
    this.total = 0;
    let subtotal = 0;
    for (let index = 0; index < this.cartProducts.length; index++) {
      subtotal =
        this.cartProducts[index].amount * this.cartProducts[index].price;
      this.total = this.total + subtotal;
    }
    return this.total;
  }
  submitForm(): void {
    this.order.amount = this.total;
    this.order.name = this.name;
    this.orderService.setOrder(this.order);
    this.router.navigate(['/order/confirm']);
  }

  validateAmount(product: Cart): void {
    for (let index = 0; index < this.cartProducts.length; index++) {
      if (this.cartProducts[index].name == product.name) {
        if (this.cartProducts[index].amount == 0) {
          this.cartService.romoveProduct();
        }
      }
    }
  }
}
