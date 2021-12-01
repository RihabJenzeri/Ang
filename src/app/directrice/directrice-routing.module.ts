import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectriceComponent } from './directrice.component';
import { AcceuilDirectriceComponent } from './acceuil-directrice/acceuil-directrice.component';
import { FournisseurDirectriceComponent } from './fournisseur-directrice/fournisseur-directrice.component';
import { DemandeDirectriceComponent } from './demande-directrice/demande-directrice.component';

const routes: Routes = [{ path: '', component: DirectriceComponent ,
children:[
{ path: 'acceuil-directrice',     component:AcceuilDirectriceComponent },
{ path: 'fournisseur-directrice', component:FournisseurDirectriceComponent},
{ path: 'demande-directrice',     component:DemandeDirectriceComponent },

],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectriceRoutingModule { }
