import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,SliderComponent,ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
