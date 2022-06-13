import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { JobSearchService } from './job-search.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
})
export class JobSearchComponent implements OnInit {
  constructor(
    public jobService: JobService,
    public jobSearchService: JobSearchService
  ) {}

  ngOnInit(): void {}
}
