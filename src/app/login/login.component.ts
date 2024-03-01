import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [RouterLink, RouterOutlet, NavbarComponent, CommonModule,]
})
export class LoginComponent {
  isLoggedIn:any;
  userRole:any;
Login(isLoggedIn:boolean) {
 
  this.isLoggedIn=true;
  alert('User Login Success')

}

 

  
}
