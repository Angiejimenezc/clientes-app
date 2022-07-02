import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly baseUrl: string = 'ttp://localhost:8080/api/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }
}
