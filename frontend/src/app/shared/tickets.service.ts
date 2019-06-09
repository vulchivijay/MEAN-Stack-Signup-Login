import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operators';
// import 'rxjs/operators/toPromise';
import { environment } from './../../environments/environment';

import { Tickets } from './tickets.model';

@Injectable() // { providedIn: 'root' }

export class TicketsService {
  selectedTicket: Tickets;
  tickets: Tickets[];
  
  constructor(private http: HttpClient) { }

  postTicket(ticket: Tickets) {
    return this.http.post(environment.apiBaseUrl+'/tickets', ticket)
  }

  getTickets() {
    return this.http.get(environment.apiBaseUrl+'/tickets');
  }

}
