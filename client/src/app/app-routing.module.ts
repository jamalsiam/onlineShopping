import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {ViewItemComponent} from './view-item/view-item.component';

const routes: Routes = [
{
  path: '' ,
  component : HomeComponent
},
  {
    path: 'info' ,
    component : AboutComponent
  },
  {
    path: 'signup' ,
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'view',
    component: ViewItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
