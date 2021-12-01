import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { AcceuilClientsComponent } from './acceuil-clients/acceuil-clients.component';
import { FournisseurClientsComponent } from './fournisseur-clients/fournisseur-clients.component';
import { DemandeClientsComponent } from './demande-clients/demande-clients.component';

const routes: Routes = [{ path: '', component: ClientsComponent,
children:[
{ path: 'acceuil-clients',     component:AcceuilClientsComponent },
{ path: 'fournisseur-clients', component:FournisseurClientsComponent},
{ path: 'demande-clients',     component:DemandeClientsComponent },

],
 }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
