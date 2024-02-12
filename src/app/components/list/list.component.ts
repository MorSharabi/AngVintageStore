import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  productsList: Product[] = [];
  sort: number = 0;
  switchCurrency = false;
  alertT() {
    alert('...');
  }

  constructor(
    private productService: ProductService,
    private activated: ActivatedRoute
  ) {
    this.activated.params.subscribe((params) => {
      this.sort = params['num'] as number;
      this.productService.get().subscribe((data) => {
        this.productsList = data as Product[];
      });
    });
  }

  switchC() {
    this.switchCurrency = !this.switchCurrency;
  }

  sortData(id: number) {
    if (id == 1) {
      this.sortProductsByPrice();
    } else {
      this.sortProductsByDate();
    }
  }
  sortProductsByPrice() {
    this.productsList.sort((a, b) => {
      return a.price - b.price;
    });
  }
  sortProductsByDate() {
    this.productsList.sort((a, b) => {
      const dateA = new Date(a.publicationDate).getTime();
      const dateB = new Date(b.publicationDate).getTime();
      return dateA - dateB;
    });
  }
}
