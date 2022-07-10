import { Product } from "./product";

export class ItemInvoice {

product! : Product;
quantity: number = 1;
price!: number;


calcImport(): number {
  return this.quantity * this.price;
}



}
