import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { JobService } from '../job.service';
import { Job } from '../job';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent implements OnInit {
  job$!: Observable<Job>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public jobService: JobService
  ) {
    jobService.getJobDetail();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.jobService.jobs.type);

    // this.job$ = this.route.paramMap.pipe(
    // switchMap((params: ParamMap) =>
    //   this.jobService.getJobs(params.get(id)))
    //   );
  }
}
