import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CategoryComponent,
    ProductsComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    ProductItemComponent,
    LoginComponent,
    HttpClientModule,
    ProdCardComponent,
    SideBarComponent,
    InnerHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trial-project';
}
