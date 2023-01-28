import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Product } from './model/Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mystore';
}
