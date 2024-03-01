import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-temples',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temples.component.html',
  styleUrl: './temples.component.css'
})
export class TemplesComponent {

  
  visited=false;
  visited1=false;
  visited2=false;
  visited3=false;
 
  visiteDone(visited:any){
   this.visited=true;
  
}
visiteDone1(visited1:any){
  this.visited1=true;
 
}

visiteDone2(visited2:any){
  this.visited2=true;
 
}
visiteDone3(visited3:any){
  this.visited3=true;
 
}


}


