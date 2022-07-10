import { Client } from 'src/app/models/client';
import { ItemInvoice } from './item-invoice';



export class Invoice {
  id!: number;
  description!: string;
  observation!: string;
  items!: ItemInvoice[];
  client! : Client;
  total!: number;
  createAt!: string;

}
