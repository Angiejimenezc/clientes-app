import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private url = 'http://localhost:8080/api/clients';

  private HttpHeaders =   new HttpHeaders( {'Content-Type': 'application/json'} );

  constructor( private http: HttpClient) { }

  getClients(): Observable< Client[] > {

    return this.http.get(this.url).pipe(
      map( response => response as Client[])
    );
  }

  create(client: Client ): Observable< Client > {
    return this.http.post<Client>(this.url, client, {headers: this.HttpHeaders});
  }

}
