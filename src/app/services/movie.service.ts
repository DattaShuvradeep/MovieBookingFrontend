import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  
  getAllMovieLocal_url='http://localhost:8087/api/v1.0/moviebooking/all'
  createMovieLocal_url='http://localhost:8087/api/v1.0/moviebooking/admin/addmovie'
  deleteMovieLocal_url='http://localhost:8087/api/v1.0/moviebooking/admin/delete/'
  updateMovieLocal_url='http://localhost:8087/api/v1.0/moviebooking/admin'
  searchMovieLocal_url='http://localhost:8087/api/v1.0/moviebooking/movies/searchByName/'
  constructor(private http: HttpClient) { }

  createMovie(movie: Movie | any): Observable<Movie> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Movie>(this.createMovieLocal_url, movie,{headers});
  }
  getAllMovie(): Observable<Movie[]> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });


    return this.http.get<Movie[]>(this.getAllMovieLocal_url,{headers})
  }
  deleteMovie(id: any): Observable<any> {
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    }).set('Content-Type', 'text/plain; charset=utf-8').set('responseType', 'text');
    return this.http.delete<any>(`${this.deleteMovieLocal_url}${id}`,{headers});
  }
  updateMovie(movie: any, movieName: string): Observable<Movie> {
    return this.http.put<Movie>(`${this.updateMovieLocal_url}/${movieName}/update`, movie);
  }

  searchMovieById(id:any):Observable<any>{
    return this.http.get<any>(`${this.searchMovieLocal_url}${id}`)
  }
}
