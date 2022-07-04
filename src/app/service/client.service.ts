import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { CLIENTS } from '../clients/clients.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly apiUrl: string = 'http://localhost:8080/api/';

  constructor() {}

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
