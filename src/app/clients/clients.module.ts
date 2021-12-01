import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { AcceuilClientsComponent } from './acceuil-clients/acceuil-clients.component';
import { FournisseurClientsComponent } from './fournisseur-clients/fournisseur-clients.component';
import { DemandeClientsComponent } from './demande-clients/demande-clients.component';


@NgModule({
  declarations: [
    ClientsComponent,
    AcceuilClientsComponent,
    FournisseurClientsComponent,
    DemandeClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
