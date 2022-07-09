import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './clients/form.component';
import { DetailsComponent } from './clients/details.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/form', component: FormComponent },
  { path: 'clients/form/:id', component: FormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
