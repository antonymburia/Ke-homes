import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { PostHouseComponent } from './post-house/post-house.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'post-house', component: PostHouseComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
