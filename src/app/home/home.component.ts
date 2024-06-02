import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,SliderComponent,ProductItemComponent,InnerHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
