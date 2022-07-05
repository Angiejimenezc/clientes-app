import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientService } from './service/client.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './clients/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    ErrorPageComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}