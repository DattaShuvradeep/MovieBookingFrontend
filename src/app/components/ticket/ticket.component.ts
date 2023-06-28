import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  data:any[]=[]
  displayedColumns: string[] = ['transactionId', 'movieName', 'theaterName', 'seatBooked','address','bookingDate','bookingTime'];
  dataSource:any[]=[];
  constructor(private ticketService:TicketService) { }
  componentName="TicketComponent"
  ngOnInit(): void {
    this.getAllTicket()
  }

  getAllTicket(){
    this.ticketService.getAllTicket().subscribe(res=>{
      this.dataSource=res
    })
  }

}
