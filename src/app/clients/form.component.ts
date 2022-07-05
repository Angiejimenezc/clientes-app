import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public client = new Client(0, '', '', '', '');

  public title: string = 'Create Clients';

  constructor() {}

  ngOnInit(): void {}



  create(): void{
    console.log('Clicked!') ;
    console.log(this.client)

  }
}
