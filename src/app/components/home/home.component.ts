import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { Movie } from 'src/app/model/movie';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MovieComponent } from '../movie/movie.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  role: string | any = localStorage.getItem('roles')
  movies: Movie[] | any[] = [];
  displayedColumns: string[] = ['movieId', 'movieName', 'totalSeat', 'totalSeatBooked', 'availableSeatsForBooking', 'action'];
  dataSource: any = new MatTableDataSource(this.movies);
  componentName="HomeComponent"

  constructor(private movieService: MovieService, private userService: UserService,private router:Router,public dialog: MatDialog) { }

  movieId=new FormGroup({
    id:new FormControl<any>('')
  })

  getMovieId(){
    console.log(this.movieId.value.id)
    localStorage.setItem('movieId',this.movieId.value.id)
    this.router.navigate(['/search/movie'])

  }


  ngOnInit(): void {
    this.getAllMovie()

  }

  getAllMovie() {
    this.movieService.getAllMovie().subscribe(data => {
      this.movies = data
      this.dataSource = this.movies
      console.log(this.movies)
      

    }, error => {
      console.log(error)
    })
  }
  
  getData(event: any) {
    
    this.movieService.deleteMovie(event).subscribe(data => {
      console.log(data)
      window.alert('Movie Deleted with id ' + event)
      location.reload()
      
    },
      error => {
        console.log(error);
        
      })
  }
  getMovieName(event: any) {
    localStorage.setItem('movieName', event)
    console.log(event)
    
    
  }

 
  logout(){
    localStorage.removeItem('isLogined')
    localStorage.removeItem('token')
    localStorage.removeItem('roles')
    localStorage.removeItem('movieName')
    localStorage.removeItem('error')
    this.router.navigate(['/login'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(MovieComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

