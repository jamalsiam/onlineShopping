import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {ViewItemComponent} from './view-item/view-item.component';
import {SignoutComponent} from './signout/signout.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
  path: ''  ,
  component : HomeComponent
},
  {
    path: 'search' ,
    component : AboutComponent
  },
  {
    path: 'search/:query' ,
    component : AboutComponent
  },
  {
    path: 'search/view/:id',
    component: ViewItemComponent
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
    path: 'search/:query/view/:id',
    component: ViewItemComponent
  },
  {
    path: 'view/:id',
    component: ViewItemComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  },
  {
    path: 'myprofile' ,
    component: ProfileComponent
  },
  {
    path: 'myprofile/view/:id',
    component: ViewItemComponent
  },

  {
    path: '**' ,
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
