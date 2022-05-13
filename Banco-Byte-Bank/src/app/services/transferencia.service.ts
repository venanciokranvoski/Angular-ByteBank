import { Injectable } from '@angular/core';

@Injectable({// ele esta dizendo
  providedIn: 'root'
})
export class TransferenciaService { // posso chamar esta classe pelo constructor dela

 private ListaDeTransferencia: any[];

  constructor(){
    this.ListaDeTransferencia = [];
  }
  //===============

  get transferencia(){
      return this.ListaDeTransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.ListaDeTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }


}
