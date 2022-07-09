import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  client!: Client;
  title: string = 'Profile';
  image: any[] = [];
  private photephotopicked!: File;

  //private corsHeaders = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});


  constructor(
    private clientSrv: ClientService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      let id: any = params.get('id');

      if (id) {
        // Si existe obtenemos el client

        this.clientSrv.getClient(id).subscribe((client) => {
          this.client = client;
          console.log(this.client);
        });
      }
    });
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
}
