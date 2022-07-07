import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../service/client.service';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {

  @ViewChild('form')
  form!: NgForm;

  public client = new Client(0, '', '', '', '','');
  public title: string = 'Create Clients';


  constructor(
    private clientSrv: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadClient();
  }


    existClient(): boolean{
    return this.client.id != 0;

  }


  loadClient(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clientSrv.getClient(id).subscribe((client) => {
          this.client = client;
        });
      }
    });
  }

  create(): void {
    this.clientSrv.create(this.client).subscribe((client) => {
      this.router.navigate(['/clients']);
      swal.fire(
        'Client Created',
        `Client ${this.client.name} created successfully`,
        'success'
      );
    });
    console.log(this.client);
  }

  update(): void {
    this.clientSrv.update(this.client).subscribe((client) => {
      this.router.navigate(['/clients/']);
      swal.fire(
        'Client Updated',
        `Client ${this.client.name} updated successfully`,
        'success'
      );
    });
  }
}
