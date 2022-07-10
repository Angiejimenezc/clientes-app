import { Invoice } from '../invoice/models/invoice';
export class Client {

    public id!: number;
    public name!: string;
    public surname!: string;
    public email!: string;
    public createAt!: string;
    public photo!: string;
    public Invoice!: Invoice[]

}
