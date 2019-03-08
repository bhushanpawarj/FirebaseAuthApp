import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialDesignModule} from './material-design/material-design.module';
import { RouterModule, Routes } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const appRoutes: Routes = [
  { path: '',      redirectTo: '/home' ,pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent  ,canActivate:[AuthGuardGuard]},
  { path: 'login', component: LoginComponent },
];

export const firebaseConfig = {
  apiKey: "AIzaSyDJxzSvzWHJCywVbHWnxl20JcSa2iiM_qw",
  authDomain: "angularfirebaseauthproject.firebaseapp.com",
  databaseURL: "https://angularfirebaseauthproject.firebaseio.com",
  projectId: "angularfirebaseauthproject",
  storageBucket: "angularfirebaseauthproject.appspot.com",
  messagingSenderId: "142997162845"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
