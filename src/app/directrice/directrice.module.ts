import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectriceRoutingModule } from './directrice-routing.module';
import { DirectriceComponent } from './directrice.component';
import { AcceuilDirectriceComponent } from './acceuil-directrice/acceuil-directrice.component';
import { FournisseurDirectriceComponent } from './fournisseur-directrice/fournisseur-directrice.component';
import { DemandeDirectriceComponent } from './demande-directrice/demande-directrice.component';


@NgModule({
  declarations: [
    DirectriceComponent,
    AcceuilDirectriceComponent,
    FournisseurDirectriceComponent,
    DemandeDirectriceComponent
  ],
  imports: [
    CommonModule,
    DirectriceRoutingModule
  ]
})
export class DirectriceModule { }
