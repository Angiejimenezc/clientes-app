import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../invoice/models/invoice';
import { Product } from '../invoice/models/product';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private url: string = 'http://localhost:8080/api/invoices';

  constructor(private http: HttpClient) { }

  getInvoice(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  filterProducts(term: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/filter-products/${term}`);
  }

  create(factura: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.url, Invoice);
  }
}
