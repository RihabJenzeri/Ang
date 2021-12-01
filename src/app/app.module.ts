import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DirectriceComponent } from './directrice/directrice.component';
import { AcceuilDirectriceComponent } from './directrice/acceuil-directrice/acceuil-directrice.component';
import { FournisseurDirectriceComponent } from './directrice/fournisseur-directrice/fournisseur-directrice.component';
import { DemandeDirectriceComponent } from './directrice/demande-directrice/demande-directrice.component';

import { ClientsComponent } from './clients/clients.component';
import { AcceuilClientsComponent } from './clients/acceuil-clients/acceuil-clients.component';
import { FournisseurClientsComponent } from './clients/fournisseur-clients/fournisseur-clients.component';
import { DemandeClientsComponent } from './clients/demande-clients/demande-clients.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
