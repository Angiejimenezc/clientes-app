import { DetailsInvoiceComponent } from './invoice/details-invoice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './clients/form.component';
import { DetailsComponent } from './clients/details.component';
import { LoginComponent } from './user/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 // { path: 'clients/home', component: HomeComponent},
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/form', component: FormComponent },
  { path: 'clients/form/:id', component: FormComponent},
  { path:  'login', component: LoginComponent},
  { path: 'invoice/:id' , component: DetailsInvoiceComponent},
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
