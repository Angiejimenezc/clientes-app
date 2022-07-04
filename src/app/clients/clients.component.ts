import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ClientService } from '../service/client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clientList!: Client[];

  constructor(private clientSrv: ClientService) {}

  ngOnInit(): void {
    this.clientSrv.getClients().subscribe((clients) => {
      this.clientList = clients;
    });
  }
}
