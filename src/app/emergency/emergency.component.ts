import { Component } from '@angular/core';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [],
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.css'
})
export class EmergencyComponent {

  Emergency:any[]=[

    {id:1,name:"Nashik Police",No:100},
    {id:2,name:"Ambulance",No:101},
    {id:3,name:"Road Help",No:546213},
    {id:4,name:"Transport Office",No:7845986547},
    {id:5,name:"RTO",No:912469764},
    {id:6,name:"City Link",No:874595624},
    {id:7,name:"Civil Hospital",No:874595624},

  ]
    

}
