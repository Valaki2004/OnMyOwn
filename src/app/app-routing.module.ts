import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NumbersComponent } from './numbers/numbers.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"Navbar", component:NavbarComponent},
  {path:"Numbers", component:NumbersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
