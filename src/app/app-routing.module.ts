import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginJunctionComponent } from './authentication/login-junction/login-junction.component';
import { SigninComponent } from './authentication/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginjunction',
    pathMatch: 'full'
  },
  {
    path: 'loginjunction', component: LoginJunctionComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
