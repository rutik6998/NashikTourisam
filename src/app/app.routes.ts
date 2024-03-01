import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PicnicComponent } from './picnic/picnic.component';
import { TreckComponent } from './treck/treck.component';
import { TemplesComponent } from './temples/temples.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'home',component:HomepageComponent},

    {path:'home/login',component:LoginComponent},
    {path:'home/signup',component:SignupComponent},
    {
        path:'',component:HomepageComponent
    },
    {path:'help',component:EmergencyComponent},
    {path:'picnic',component:PicnicComponent},
    {path:'treak',component:TreckComponent},
    {path:'temple',component:TemplesComponent},
 
   
    
];
