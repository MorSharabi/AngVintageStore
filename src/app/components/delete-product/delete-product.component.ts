import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent {
  id: number = 0;
  constructor(
    private activated: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.activated.params.subscribe((params) => {
      this.id = params['id'];
      this.productService.delete(this.id).subscribe(
        (data) => {
          window.location.href = 'http://localhost:4200/';
        },
        (err) => {
          alert(err.message);
        }
      );
    });
  }
}
