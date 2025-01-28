import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginJunctionComponent } from './authentication/login-junction/login-junction.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { FbloginComponent } from './authentication/fblogin/fblogin.component';
import { InstaLoginComponent } from './authentication/insta-login/insta-login.component';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';

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
    path: 'fblogin', component:FbloginComponent
  },
  {
    path:'insta-login', component:InstaLoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
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
