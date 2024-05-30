import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
