import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsRoutingModule } from './jobs-routing.module';

@NgModule({
  declarations: [JobDetailComponent],
  imports: [CommonModule, JobsRoutingModule],
})
export class JobsModule {}
