import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public client = new Client(0, '', '', '', '');
  public title: string = 'Create Clients';

  constructor(private clientSrv : ClientService,
              private router: Router) {}

  ngOnInit(): void {}

      create(): void {
        this.clientSrv.create(this.client)
        .subscribe(response => this.router.navigate(['/clients']));
        console.log( this.client );
      }
}


