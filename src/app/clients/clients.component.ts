import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clientList: Client[] = [];

  constructor(private clientSrv: ClientService) {}

  ngOnInit(): void {
    this.clientList;
    console.log('clientsList', this.clientList);
  }

  getClients() {
    this.clientSrv.getClients().subscribe((data) => {
      this.clientList = data;
      console.log('data');
    });
  }
}
