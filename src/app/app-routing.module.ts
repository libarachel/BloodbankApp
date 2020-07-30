import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DonarslistComponent } from './donarslist/donarslist.component';
import { AddDonarComponent } from './add-donar/add-donar.component';
import { EditDonarComponent } from './edit-donar/edit-donar.component';
import { RecipientListComponent } from './recipient-list/recipient-list.component';
import { AddRecipientsComponent } from './add-recipients/add-recipients.component';
import { EditRecipientsComponent } from './edit-recipients/edit-recipients.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full' 
},
  {path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'donars', component: DonarslistComponent},
  { path: 'add-donar', component: AddDonarComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id', component: EditDonarComponent},
  { path: 'recipients', component: RecipientListComponent},
  {path: 'add-recipient', component: AddRecipientsComponent},
  {path: 'editing/:id' , component: EditRecipientsComponent },
  { path: 'login' , component: LoginComponent },
  {path: 'register', component: RegisterComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
