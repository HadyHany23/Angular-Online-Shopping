import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DemoService } from '../services/demo.service';
@Component({
  selector: 'app-prod-card',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './prod-card.component.html',
  providers: [DemoService],
  styleUrl: './prod-card.component.css',
})
export class ProdCardComponent implements OnInit {
  faStar = faStar;
  
  public data: any;
  constructor(private service: DemoService) {}

  public fetchData() {
    this.service.getall().subscribe((resp: any) => {
      this.data = resp;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
