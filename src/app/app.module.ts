import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../app/service/auth/auth.guard';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilComponent } from './profil/profil.component';
import { LikeComponent } from './like/like.component';
import { MessageComponent } from './message/message.component';
import { RechercheComponent } from './recherche/recherche.component';
import { EventComponent } from './event/event.component';
import { Error404Component } from './error404/error404.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfilComponent,
    LikeComponent,
    MessageComponent,
    RechercheComponent,
    EventComponent,
    Error404Component,
    AccueilComponent,
    ConnexionComponent,
  ],

  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot([
        { path: '', component: AccueilComponent },
        { path: 'profil', canActivate: [AuthGuard], component: ProfilComponent },
        { path: 'like', component: LikeComponent },
        { path: 'message', component: MessageComponent },
        { path: 'recherche', component: RechercheComponent },
        { path: 'event', component: EventComponent },
        { path: '**', component: Error404Component },
      ])
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
