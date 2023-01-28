import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/Cart';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id: number = 0;
  products: Product[] = [];
  product: Product = new Product();
  count: number = 0;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      //get product data
      this.dataService.getProducts().subscribe((res) => {
        this.products = res;
        this.product = this.products[this.id - 1];
      });
    });
  }

  submitForm() {
    const productCart: Cart = {
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      amount: this.count,
    };
    this.cartService.addProducts(productCart);
  }
}
