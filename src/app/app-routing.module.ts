import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';
import { RouterGuardService } from './services/router-guard.service';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetPasswordComponent},
  {path:'home',component:HomeComponent,canActivate:[RouterGuardService]},
  {path:'createMovie',component:MovieComponent,canActivate:[RouterGuardService]},
  {path:'ticket',component:TicketComponent,canActivate:[RouterGuardService]},
  {path:'booking',component:TicketBookingComponent,canActivate:[RouterGuardService]},
  {path:'search/movie',component:SearchMovieComponent,canActivate:[RouterGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
