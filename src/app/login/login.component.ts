import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public serv: LoginService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.serv.getUserDetails().subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
