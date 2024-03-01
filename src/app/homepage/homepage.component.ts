import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

websiteTiltle="Nashik Tourisam";
info="Website For Nashik Tours and Tourisam.In This Website You can check various picnic spots,Treaking Spots and Temples.You can visit them and expolore the buety of Nashik City";

  

}
