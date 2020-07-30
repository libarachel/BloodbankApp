import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { BloodbankService } from './bloodbank.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    DonarslistComponent,
    AddDonarComponent,
    EditDonarComponent,
    RecipientListComponent,
    AddRecipientsComponent,
    EditRecipientsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule


  ],
  providers: [BloodbankService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
