import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { JobsModule } from './jobs/jobs.module';
import { JobSearchComponent } from './jobs/job-search/job-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CompanyDetailsComponent,
    JobSearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, JobsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
