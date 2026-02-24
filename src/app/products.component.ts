import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image?: string;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    { name: 'Laptop', price: 45000, image: '/assets/laptop.png', stock: 5 },
    { name: 'Phone', price: 15000, image: '/assets/phone.png', stock: 0 },
    { name: 'Headphones', price: 2000, image: '/assets/headphones.png', stock: 10 },
    { name: 'Keyboard', price: 1200, image: '/assets/keyboard.png', stock: 3 }
  ];

  addToCart(product: Product) {
    if (product.stock > 0) {
      product.stock -= 1;
      alert(product.name + ' added to cart! Remaining stock: ' + product.stock);
    } else {
      alert(product.name + ' is out of stock!');
    }
  }
}
