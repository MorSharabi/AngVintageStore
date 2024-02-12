import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent {
  newProduct: Product = new Product();
  newId: number = 0;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.get().subscribe((data) => {
      let prodArr = data as Product[];
      let maxId = prodArr.reduce(
        (max, product) => (product.id > max ? product.id : max),
        0
      );
      this.newProduct.id = maxId + 1;
      this.newProduct.publicationDate = new Date();
    });
  }
  onSubmit() {
    this.productService.post(this.newProduct).subscribe(
      (data) => {
        window.location.href = 'http://localhost:4200/';
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  @Output() returnClicked = new EventEmitter<void>();

  returnHome() {
    this.returnClicked.emit();
  }
}
