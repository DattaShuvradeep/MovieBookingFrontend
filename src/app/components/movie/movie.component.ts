
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:Movie=new Movie();
  movies:Movie[]=[];
  data:any={}

  createMovieForm=new FormGroup({
    movieId:new FormControl(''),
    movieName:new FormControl(''),
    totalSeat:new FormControl('')
  })
 

  constructor(private movieService:MovieService,private router:Router ,private activatedroute:ActivatedRoute) { }
  create:boolean|any = false
  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      console.log(data);
  })
    if(window.location.pathname==="/createMovie"){
      this.create=true
    }
    console.log(window.location.pathname)
  }



  addMovie(){
    this.movie.movieId=this.createMovieForm.value.movieId
    this.movie.movieName=this.createMovieForm.value.movieName
    this.movie.totalSeat=this.createMovieForm.value.totalSeat
    this.movieService.createMovie(this.movie).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/home'])
      location.reload()
    },
    error=>{
      console.log(error);
    })
  }
  

}
