import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [ RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
showImage = false;

  ngOnInit() {
    setTimeout(() => {
      this.showImage = true;
    }, 2000); // 2 seconds delay
  }
}

