import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import {MatStepperModule} from '@angular/material/stepper';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    HomeComponent,
    MovieComponent,
    TicketComponent,
    TicketBookingComponent,
    SearchMovieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
