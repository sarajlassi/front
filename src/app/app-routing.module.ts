import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ComptedaveComponent } from './admin/pages/dave/comptedave/comptedave.component';
import { ContratcompteComponent } from './admin/pages/dave/contratcompte/contratcompte.component';
import { DaveComponent } from './admin/pages/dave/dave.component';
import { SoldeComponent } from './admin/pages/dave/solde/solde.component';
import { ContratcreditComponent } from './admin/pages/engagement/contratcredit/contratcredit.component';
import { CreditpretComponent } from './admin/pages/engagement/creditpret/creditpret.component';
import { CreditrenouvelableComponent } from './admin/pages/engagement/creditrenouvelable/creditrenouvelable.component';
import { EngagementComponent } from './admin/pages/engagement/engagement.component';
import { AgenceComponent } from './admin/pages/referentiel/agence/agence.component';
import { ClientComponent } from './admin/pages/referentiel/client/client.component';
import { CompteComponent } from './admin/pages/referentiel/compte/compte.component';
import { ContactComponent } from './admin/pages/referentiel/contact/contact.component';
import { DeviseComponent } from './admin/pages/referentiel/devise/devise.component';
import { PaysComponent } from './admin/pages/referentiel/pays/pays.component';
import { ReferentielComponent } from './admin/pages/referentiel/referentiel.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DaveuserComponent } from './user/pages/daveuser/daveuser.component';
import { EngagementuserComponent } from './user/pages/engagementuser/engagementuser.component';
import { ReferentieluserComponent } from './user/pages/referentieluser/referentieluser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'Accueil', component:HomeComponent},
  {path:'Admin', component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'Guichetier', component:UserComponent, canActivate:[AuthGuard], data:{roles:['Guichetier']}},
  {path:'login', component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent},
  {path:'referentiel', component:ReferentielComponent},
  {path:'dave', component:DaveComponent},
  {path:'engagement', component:EngagementComponent},
  {path:'referentieluser', component:ReferentieluserComponent},
  {path:'daveuser', component:DaveuserComponent},
  {path:'engagementuser', component:EngagementuserComponent},
  {path:'agence', component:AgenceComponent},
  {path:'client', component:ClientComponent},
  {path:'compte', component:CompteComponent},
  {path:'contact', component:ContactComponent},
  {path:'devise', component:DeviseComponent},
  {path:'pays', component:PaysComponent},
  {path:'comptedave', component:ComptedaveComponent},
  {path:'contratcompte', component:ContratcompteComponent},
  {path:'solde', component:SoldeComponent},
  {path:'contratcredit', component:ContratcreditComponent},
  {path:'creditpret', component:CreditpretComponent},
  {path:'creditrenouvelable', component:CreditrenouvelableComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
