import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MovieBookingApplication';
  date:Date=new Date()
 

constructor(private router:Router,public dialog: MatDialog){}
  ngOnInit(): void {
   
  }
}
