import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';


const routes: Routes = [
{ path: 'directrice', loadChildren: () => import('./directrice/directrice.module').then(m => m.DirectriceModule) }, 
{ path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),pathMatch:'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
