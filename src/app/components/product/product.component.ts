import { Component, Input, Output } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() price: number = 0;
  onBuyClick(id: number) {
    throw new Error('Method not implemented.');
  }
  @Input() product: Product = new Product();
}
