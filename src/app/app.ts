import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
 import { ProductsComponent } from './products.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Ray Shop');
  // product and cart logic moved to ProductsComponent
}
