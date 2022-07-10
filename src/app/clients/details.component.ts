import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';
import { InvoiceService } from '../service/invoice.service';
import { ModalService } from './modalService/modal.service';
import swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';
import { Invoice } from '../invoice/models/invoice';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  @Input() client: Client;
  title: string = 'Profile';
  image: any[] = [];
  private photephotopicked!: File;
  invoice: Invoice[] = [];

  //private corsHeaders = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});


  constructor(
    private clientSrv: ClientService,
    private InvoiceService: InvoiceService,
    public  modalService: ModalService

  ) {

    this.client  = new Client();
    console.log('Este :>> ', this.client);


  }

  ngOnInit(): void {

  }

  capturarFile(event: any): void {
      this.photephotopicked = event.target.files[0];
      this.image.push(this.photephotopicked);
      console.log('Aquí', this.image);
    }


  uploadFile(): any {
    try {
      const formData = new FormData();
      this.image.forEach((file) => {
        console.log(file);
        formData.append('file', file); //Agregamos el archivo al formulario
        console.log(file);
      });
      this.clientSrv
        .uploadPhoto(this.photephotopicked, this.client.id)
        .subscribe((client) => {
          this.client = client;
          console.log('errror', this.client);
          swal.fire(
            'Photo uploaded',
            `Photo uploaded successfully : ${this.client.photo} `,
            'success'
          );
        });
    } catch (e) {
      console.log("aqui otra vez",e);
    }
  }

  closeModal(){
    this.modalService.closeModel();
    //this.image = [];
  }

}
