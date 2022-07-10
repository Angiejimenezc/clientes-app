import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from './models/invoice';



@Component({
  selector: 'app-details-invoice',
  templateUrl: './details-invoice.component.html',
  styleUrls: ['./details-invoice.component.css']
})

export class DetailsInvoiceComponent implements OnInit {

  invoice : Invoice;
  title: string = 'Invoice';

  constructor(
    private invoiceSrv: InvoiceService,
    private activateRoute : ActivatedRoute) {
    this.invoice = new Invoice();
  }


  ngOnInit(): void {
//     this.activateRoute.paramMap.subscribe(params => {
//     let id = params.get('id');
//   this.invoiceSrv.getInvoice(id).subscribe(invoice => {
//     this.invoice = invoice;
//   });
// }
// )
 }
}
