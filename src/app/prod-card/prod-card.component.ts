import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-prod-card',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './prod-card.component.html',
  styleUrl: './prod-card.component.css',
})
export class ProdCardComponent{
  faStar = faStar;
  // value = 2.5; //addition of .5
  // starList: string[] = [];
  // ngOnInit() {
  //   let i=1;
  //   for(i=1; i<=5; i++) {
  //     if(i<= this.value) {
  //       this.starList.push("fas fa-star");
  //     } else if(i <= this.value+0.5) {
  //       this.starList.push("fas fa-star-half");
  //     } else {
  //       this.starList.push("far fa-star");
  //     }
  //   }
  // }
}
