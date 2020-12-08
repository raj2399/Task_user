import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { MenuComponent } from "../app/menu/menu.component";
import { LoginComponent } from "../app/login/login.component";
import { SignupComponent } from './signup/signup.component';
import { ViewUserComponent  } from "../app/view-user/view-user.component";
import { HomeComponent } from "../app/home/home.component";


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"menu",component:MenuComponent,children:[
    {path:'',component:HomeComponent},
    {path:'user',component:ViewUserComponent},
  ]},
  {path:"signup",component:SignupComponent}
];
export const routing=RouterModule.forRoot(routes,{useHash:true});
