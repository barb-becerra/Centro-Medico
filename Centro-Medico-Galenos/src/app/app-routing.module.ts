import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'tomahoras',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'tomahoras/horas-disponibles',
    pathMatch: 'full'
  },
  {
    path: 'tomahoras',
    loadChildren: () => import('./pages/toma-horas/toma-horas.module').then( m => m.TomaHorasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tomahoras/horas-disponibles',
    loadChildren: () => import('./pages/toma-horas/horas-disponibles/horas-disponibles.module').then( m => m.HorasDisponiblesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
