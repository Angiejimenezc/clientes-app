import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ClientService } from '../service/client.service';
import { Client } from '../models/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {

 clientList: Client[] = [];
 pages: number = 1;
 dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  constructor(private clientSrv: ClientService) {}

  ngOnInit(): void {
    this.clientSrv.getClients().subscribe((clients) => {
      this.clientList = clients;
    });
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


      }




