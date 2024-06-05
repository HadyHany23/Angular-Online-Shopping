import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdCardComponent } from '../prod-card/prod-card.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [
    RouterOutlet,
    ProdCardComponent,
    SideBarComponent,
    InnerHeaderComponent,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {}
