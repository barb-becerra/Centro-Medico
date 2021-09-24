import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tomahoras',
    loadChildren: () => import('./pages/toma-horas/toma-horas.module').then( m => m.TomaHorasPageModule)
  },
  {
    path: 'tomahoras2',
    loadChildren: () => import('./pages/toma-horas-2/tomahoras2.module').then( m => m.Tomahoras2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
