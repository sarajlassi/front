import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
import { FooterComponent } from './admin/components/footer/footer.component';
import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { ReferentielComponent } from './admin/pages/referentiel/referentiel.component';
import { DaveComponent } from './admin/pages/dave/dave.component';
import { EngagementComponent } from './admin/pages/engagement/engagement.component';
import { ReferentieluserComponent } from './user/pages/referentieluser/referentieluser.component';
import { DaveuserComponent } from './user/pages/daveuser/daveuser.component';
import { EngagementuserComponent } from './user/pages/engagementuser/engagementuser.component';
import { SidebarUserComponent } from './user/components/sidebar-user/sidebar-user.component';
import { ClientComponent } from './admin/pages/referentiel/client/client.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import {DropdownModule} from "ng2-dropdown";
import { AgenceComponent } from './admin/pages/referentiel/agence/agence.component';
import { ContactComponent } from './admin/pages/referentiel/contact/contact.component';
import { PaysComponent } from './admin/pages/referentiel/pays/pays.component';
import { CompteComponent } from './admin/pages/referentiel/compte/compte.component';
import { DeviseComponent } from './admin/pages/referentiel/devise/devise.component';
import { ContratcompteComponent } from './admin/pages/dave/contratcompte/contratcompte.component';
import { SoldeComponent } from './admin/pages/dave/solde/solde.component';
import { ComptedaveComponent } from './admin/pages/dave/comptedave/comptedave.component';
import { ContratcreditComponent } from './admin/pages/engagement/contratcredit/contratcredit.component';
import { CreditpretComponent } from './admin/pages/engagement/creditpret/creditpret.component';
import { CreditrenouvelableComponent } from './admin/pages/engagement/creditrenouvelable/creditrenouvelable.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ReferentielComponent,
    DaveComponent,
    EngagementComponent,
    ReferentieluserComponent,
    DaveuserComponent,
    EngagementuserComponent,
    SidebarUserComponent,
    ClientComponent,
    AgenceComponent,
    ContactComponent,
    PaysComponent,
    CompteComponent,
    DeviseComponent,
    ContratcompteComponent,
    SoldeComponent,
    ComptedaveComponent,
    ContratcreditComponent,
    CreditpretComponent,
    CreditrenouvelableComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    Ng2DropdownModule,
    DropdownModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
