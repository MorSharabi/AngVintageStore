import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewProductComponent } from './components/new-product/new-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Final-Project';
  displayShadow = false;
  // constructor(private newProductComponent: NewProductComponent){
  //   this.newProductComponent.returnClicked.subscribe(() => {
  //     this.onReturnButtonClick();
  //   });
  // }
  onReturnButtonClick() {
    this.displayShadow = false;
  }

  async shadowBg() {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Delay of one second (1000 milliseconds)
    this.displayShadow = true;
  }
}
