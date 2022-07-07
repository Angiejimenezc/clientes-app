import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  client!: Client;
  title : string = 'Profile';
  image: any[] = [];
  private photephotopicked!: File;


  constructor(
    private clientSrv : ClientService,
    private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.activateRoute.paramMap
    .subscribe(params =>{

      let id:any = params.get('id');

      if(id){  // Si existe obtenemos el client

        this.clientSrv.getClient(id)
        .subscribe(client =>{
          this.client = client;
          console.log(this.client);
        });
      }
    })

  }

        capturarFile(event: any): void{
        this.photephotopicked = event.target.files[0]
        this.image.push(this.photephotopicked);
        console.log(this.image);

      }
        upLoadPhoto(){
        this.clientSrv.uploadPhoto(this.photephotopicked, this.client.id)
        .subscribe(client =>{
          this.client = client;
          console.log("errror", this.client);
          swal.fire('Photo uploaded', `Photo uploaded successfully : ${this.client.photo} `, 'success');
        }
        );
      }
       }









