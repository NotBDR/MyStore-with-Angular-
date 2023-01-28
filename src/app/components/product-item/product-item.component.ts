import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<any> = new EventEmitter();
  count: number = 0;
  constructor() {
    this.product = {
      id: 0,
      description: '',
      name: '',
      price: 0,
      url: '',
    };
    this.count = 0;
  }

  submitForm(): void {
    const productCart: Cart = {
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      amount: this.count,
    };

    this.addProduct.emit(productCart);
  }
}
