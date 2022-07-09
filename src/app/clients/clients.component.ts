import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { ClientService } from '../service/client.service';
import { Client } from '../models/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientService]


})
export class ClientsComponent implements OnInit {

 client : Client;
 clientList: Client[] = [];
 pages: number = 1;
 dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
 clienteSeleccionado:Client;


  constructor(private clientSrv: ClientService) {

  this.client = new Client(0, "", "", "", "", "");
  this.clienteSeleccionado = new Client(0, "", "", "", "", "" );
  }

  ngOnInit(): void {
    this.clientSrv.getClients().subscribe(
      (response) => {
        this.clientList = response;

    }

    );

  }

  delete(client: Client): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this! ${client.name} ${client.surname}`,
        icon: `warning`,
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          this.clientSrv.delete(client.id).subscribe((response) => {
            this.clientList = this.clientList.filter(cli => cli !== client)
            swalWithBootstrapButtons.fire(
              'Deleted Client!',
              `Client ${client.name}${client.surname}  has been successfully deleted.`,
              'success'
            );
          });
        }
      });

    }

      openModal(client: Client) {
      this.clienteSeleccionado = client;

    }


      }




