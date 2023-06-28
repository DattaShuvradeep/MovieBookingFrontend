import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  

  getAllTicketLocal_url='http://localhost:8087/api/v1.0/moviebooking/ticket/all'
  bookTicketLocal_url='http://localhost:8087/api/v1.0/moviebooking/'

  constructor(private http:HttpClient) { }

  getAllTicket():Observable<any>{
    let headers=new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`

    });

  return this.http.get<any>(this.getAllTicketLocal_url,{headers})
  }
  bookTicket(data:any,movieName:any):Observable<any>{
    return this.http.post<any>(`${this.bookTicketLocal_url}${movieName}`,data)
    }
}
