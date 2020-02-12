import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProfilComponent} from './profil/profil.component';
import {LikeComponent} from './like/like.component';
import {MessageComponent} from './message/message.component';
import {RechercheComponent} from './recherche/recherche.component';
import {EventComponent} from './event/event.component';
import {Error404Component} from './error404/error404.component';
import {AccueilComponent} from './accueil/accueil.component';
import {HttpClientModule} from '@angular/common/http';
import {ConnexionComponent} from './connexion/connexion.component';
import {AuthService} from '../app/_services/auth/auth.service';
import {AuthGuardService} from '../app/_services/auth/auth-guard.service';
import {CoopdispoComponent} from './coopdispo/coopdispo.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {WriteMessageComponent} from './write-message/write-message.component';

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
    CoopdispoComponent,
    InscriptionComponent,
    WriteMessageComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: AccueilComponent},
      {path: 'profil', canActivate: [AuthGuardService], component: ProfilComponent},
      {path: 'like', canActivate: [AuthGuardService], component: LikeComponent},
      {path: 'message', canActivate: [AuthGuardService], component: MessageComponent},
      {path: 'recherche', canActivate: [AuthGuardService], component: RechercheComponent},
      {path: 'event', canActivate: [AuthGuardService], component: EventComponent},
      {path: 'inscription', component: InscriptionComponent},
      {path: '**', component: Error404Component},
    ])
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
