import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Cart[] = [];
  totalPrice: number = 0;
  found: boolean = false;
  constructor() {}
  addProducts(cart: Cart): void {
    for (let index = 0; index < this.cartProducts.length; index++) {
      if (cart.name == this.cartProducts[index].name) {
        this.cartProducts[index].amount =
          this.cartProducts[index].amount + cart.amount;
        this.found = true;
      }
    }
    if (this.found == false) {
      this.cartProducts.push(cart);
    } else {
      this.found = false;
    }
  }

  getProducts(): Cart[] {
    return this.cartProducts;
  }
  romoveProduct() {
    for (let index = 0; index < this.cartProducts.length; index++) {
      if (this.cartProducts[index].amount == 0) {
        this.cartProducts = this.cartProducts.splice(index, 1);
      }
    }
    alert('product removed');
  }
}
