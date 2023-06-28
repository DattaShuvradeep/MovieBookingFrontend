import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';




@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  movieName:any=localStorage.getItem('movieName');
  constructor(private ticketService:TicketService,private router:Router,private _formBuilder: FormBuilder ) { }

  firstFormGroup = this._formBuilder.group({
    movieName: [this.movieName, Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    theaterName: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    seatBooked: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
  });
  isLinear = false;
  ngOnInit(): void {
  }

  bookTicket(){
   let booking={
      theaterName:this.secondFormGroup.value.theaterName,
      seatBooked:this.thirdFormGroup.value.seatBooked,
      address:this.fourthFormGroup.value.address
    }
     this.ticketService.bookTicket(booking,this.movieName).subscribe(res=>{
      window.alert("Booking Confirm !!! \n"+this.movieName)
      this.router.navigate(['/home'])
    })
 
    console.log(booking)
   
  }
}
