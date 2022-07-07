import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { map, Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private url = 'http://localhost:8080/api/clients';

  private HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);

  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client, {
      headers: this.HttpHeaders,
    });
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/${client.id}`, client, {
      headers: this.HttpHeaders,
    });
  }

  delete(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.url}/${id}`, {
      headers: this.HttpHeaders,
    });
  }

  uploadPhoto(file: File, id: number): Observable<Client> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Client>(`${this.url}/${id}/upload`, formData);
  }








}
