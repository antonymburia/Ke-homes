import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostHouseComponent } from './post-house/post-house.component';
// import { LoginComponent } from './login/login.component';




import { signupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,

    signupComponent,
    LoginComponent

    PostHouseComponent
    // LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
