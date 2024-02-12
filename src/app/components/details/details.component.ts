import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  currency = false;

  id: number = 0;
  product: Product = new Product();
  constructor(
    private activated: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.activated.params.subscribe((params) => {
      this.id = params['id'];
      this.productService.getById(this.id).subscribe((data) => {
        this.product = data as Product;
      });
    });
  }

  changeCurrency() {
    this.currency = !this.currency;
  }
}
