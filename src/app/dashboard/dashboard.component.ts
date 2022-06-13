import { Component, OnInit } from '@angular/core';
import { JobService } from '../jobs/job.service';
import { JobSearchService } from '../jobs/job-search/job-search.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	constructor(public jobService:JobService,
    public jobSearchService:JobSearchService){

	}
	ngOnInit(): void {
	}

  eventHandler() {
    console.log("ciao");
  }
}
