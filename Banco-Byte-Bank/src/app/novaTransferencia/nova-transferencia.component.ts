import { Transferencia } from 'models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Route } from '@angular/router';


@Component({
  selector:'app-nova-transferencia',// component
  templateUrl:'./nova-transferencia.component.html',//template que roda
  styleUrls:['nova-transferencia.component.scss']//estilização
})
export class NovaTransferenciaComponent{

  @Output() Ao_Tranferir = new  EventEmitter<any>();

   valor?: number ;
   destino?: number ;


   constructor(private service: TransferenciaService, private router: Route){}

  Transferir() {
      console.log('Solicitar nova transferencia !! ');
      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino}

      this.service.adicionar(valorEmitir).subscribe(
        (resultado) => {
        console.log(resultado);
        this.LimparCampos();
        this.router.navigateByUrl('extrato');

      },
      (error) => console.error(error))
  }

  LimparCampos(){
    this.valor = 0;
    this.destino = 0;
  }



}
