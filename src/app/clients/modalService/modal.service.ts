import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;

  constructor() { }


  openModal(){
    this.modal = true;
  }


  closeModel(){
    this.modal = false;
  }

}
