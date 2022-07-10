import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/models/client';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {

  @ViewChild('form')
  form!: NgForm;

  public client = new Client();
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
      console.log('create :>> ', this.client);
      this.router.navigate(['/clients']);
      swal.fire(
        'Client Created',
        `Client ${this.client.name} created successfully`,
        'success'
      );
    });
    console.log("No funciona" , this.client);
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
