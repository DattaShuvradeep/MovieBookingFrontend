import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponent } from './ticket.component';
import { HttpClient } from '@angular/common/http';
import { TicketService } from 'src/app/services/ticket.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

fdescribe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;
  let httpClient:HttpClient;
  let ticketObj:any;
  let service:TicketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
    httpClient=TestBed.inject(HttpClient)
    service=TestBed.inject(TicketService)

    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call from ticket component',()=>{
    let response;
    let spy=spyOn(service,'getAllTicket').and.returnValue(of(response))
    expect(component.getAllTicket()).toEqual(response)
  })

  it('Component name should be TicketComponent',()=>{
    expect(component.componentName).toBeTruthy("TicketComponet")
  })
});
