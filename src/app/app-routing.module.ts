import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './clients/form.component';

const routes: Routes = [
  { path: '404', component: ErrorPageComponent },
  { path: ' ', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
