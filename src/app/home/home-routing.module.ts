import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {RegisterComponent} from './otherPages/register/register.component';
import {LandingPageComponent} from './otherPages/langing-page/langing-page.component'
import { LoginComponent } from './otherPages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch : 'prefix',
    children : [
      {path : '', component : LandingPageComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component : LoginComponent},
      {path : '**', redirectTo : '/home', pathMatch : 'prefix'},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }