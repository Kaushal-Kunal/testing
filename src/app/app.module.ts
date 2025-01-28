import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginJunctionComponent } from './authentication/login-junction/login-junction.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FbloginComponent } from './authentication/fblogin/fblogin.component';
import { InstaLoginComponent } from './authentication/insta-login/insta-login.component';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginJunctionComponent,
    SigninComponent,
    FbloginComponent,
    InstaLoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
