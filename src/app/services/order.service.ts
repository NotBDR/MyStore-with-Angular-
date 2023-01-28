import { Injectable } from '@angular/core';
import { Order } from '../model/Order';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}
  order: Order = new Order();
  setOrder(newOrder: Order): void {
    this.order.amount = newOrder.amount;
    this.order.name = newOrder.name;
  }
  getOrder(): Order {
    return this.order;
  }
}
