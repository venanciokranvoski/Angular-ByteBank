import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from 'models/transferencia.models';

@Injectable({// ele esta dizendo
  providedIn: 'root'
})
export class TransferenciaService { // posso chamar esta classe pelo constructor dela
   private ListaDeTransferencia: any[];
   private url = 'http://localhost:3000/transferencias';


  constructor(private httpClient: HttpClient){
    this.ListaDeTransferencia = [];
  }
  //===============

  get transferencias(){
    return this.ListaDeTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia) : Observable<Transferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }


}
