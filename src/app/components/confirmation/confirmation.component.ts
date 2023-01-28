import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/services/order.service';
Order;
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  name: string = '';
  amount: number = 0;
  order: Order = new Order();
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.order = this.orderService.getOrder();
    this.name = this.order.name;
    this.amount = this.order.amount;
  }
}
