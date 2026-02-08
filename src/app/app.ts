import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ray Shop');
  
  products = signal<Product[]>([
    { id: 1, name: 'Wireless Headphones', price: 49.99, image: 'https://th.bing.com/th/id/R.486b7c23e381dd57c2fe219ec881cf95?rik=YQWBlkKvsgRASA&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fbeats_by_dr_dre_900_00198_01_studio_wireless_headphones_matte_1016367.jpg&ehk=jy4Ciak0lwr2C%2b%2fPoOyghunDvLftN6AbzeYem2b4aIc%3d&risl=&pid=ImgRaw&r=0' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://media.very.co.uk/i/very/W6LAC_SQ1_0000000004_BLACK_SLf?fmt=auto' },
    { id: 3, name: 'Portable Charger', price: 29.99, image: 'https://th.bing.com/th/id/OIP.iBiG-F_bYP5co_BJ1OHAbQHaHT?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 4, name: 'USB-C Cable', price: 12.99, image: 'https://th.bing.com/th/id/OIP.Cm8N1bcab_pGB2QEq7LzrAHaG8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 5, name: 'Phone Stand', price: 19.99, image: 'https://m.media-amazon.com/images/I/61+s3wYgQlL._AC_SL1500_.jpg' },
    { id: 6, name: 'Screen Protector', price: 9.99, image: 'https://th.bing.com/th/id/OIP.78021c70c2f4032581c7a9b4e5f8f8d3?rik=J%2b%2fj%2b%2fj%2b%2fj%2b%2fj%2b%2fj%2b%2fj%2b%2fj%2b%2fj%2b%2fj&riu=http%3a%2f%2fpicsum.photos%2fseed%2fprotector%2f800%2f600&ehk=KzFVXqQXqQXqQXqQXqQXqQXqQXqQXqQXqQXqQXqQXqQ&risl=&pid=ImgRaw&r=0' }
  ]); 

  addToCart(product: Product): void {
    alert(`${product.name} added to cart!`);
  }
}
