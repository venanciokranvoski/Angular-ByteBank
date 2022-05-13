import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'app-nova-transferencia',// component
  templateUrl:'./nova-transferencia.component.html',//template que roda
  styleUrls:['nova-transferencia.component.scss']//estilização
})
export class NovaTransferenciaComponent{

  @Output() Ao_Tranferir = new  EventEmitter<any>();

   valor?: number ;
   destino?: number ;

  Transferir() {
      console.log('Solicitar nova transferencia !! ');
      const Emitir = { valor: this.valor, destino: this.destino};
      this.Ao_Tranferir.emit(Emitir); // emitindo um valor
      this.LimparCampos();
  }

  LimparCampos(){
    this.valor = 0;
    this.destino = 0;
  }



}
