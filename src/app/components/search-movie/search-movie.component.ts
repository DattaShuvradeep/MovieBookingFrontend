import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  movie:any=''
  other:any=''

  getMovieName(event: any) {
    localStorage.setItem('movieName', event)
    console.log(event)
    
  }

  ngOnInit(): void {
    const id=localStorage.getItem('movieId')
    this.movieService.searchMovieById(id).subscribe(res=>{
      this.movie=res
      console.log(res)
    },error=>{
      this.other=error.error
      console.log(error.error)
    })
  }

}
