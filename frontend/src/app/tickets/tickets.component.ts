import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TicketsService } from './../shared/tickets.service';
import { Tickets } from './../shared/tickets.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [TicketsService]
})

export class TicketsComponent implements OnInit {

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshTicketsList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.ticketsService.selectedTicket = {
      _id: "",
      reporter: "",
      title: "",
      complexcity: "",
      createdat: new Date(),
      duedateat: new Date(),
      assignee: ""
    }
  }

  onSubmit(form: NgForm) {
    this.ticketsService.postTicket(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }

  refreshTicketsList() {
    this.ticketsService.getTickets().subscribe((res)=> {
      this.ticketsService.tickets = res as Tickets[];
    })
  }

}
