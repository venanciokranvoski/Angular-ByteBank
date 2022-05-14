import { NovaTransferenciaComponent } from './src/app/novaTransferencia/nova-transferencia.component';
import { ExtratoComponent } from './src/app/extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent },
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
