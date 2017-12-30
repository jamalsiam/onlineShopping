import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';


import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { PestComponent } from './pest/pest.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { SignoutComponent } from './signout/signout.component';
import { ProfileComponent } from './profile/profile.component';
import { AddItemComponent } from './add-item/add-item.component';
import { SettingsComponent } from './settings/settings.component';
import { ItemComponent } from './item/item.component';
import { SaleComponent } from './sale/sale.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    SearchComponent,
    PestComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ViewItemComponent,
    SignoutComponent,
    ProfileComponent,
    AddItemComponent,
    SettingsComponent,
    ItemComponent,
    SaleComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
