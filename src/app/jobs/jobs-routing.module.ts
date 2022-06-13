import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

const jobRoutes: Routes = [
  {
    path: 'job/:id',
    component: JobDetailComponent,
    children: [
      {
        path: 'companies-details/:id',
        component: CompanyDetailsComponent,
      },
    ],
  },
  { path: 'casa', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(jobRoutes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
