import { CompaniesComponent } from './pages/companies/companies.component';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
  },
  {
    path: 'company/:id',
    component: CompanyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
