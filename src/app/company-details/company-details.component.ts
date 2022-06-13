import { Component, OnInit } from '@angular/core';
import { JobService } from '../jobs/job.service';
import { CompanyDetailsService } from './company-details.service';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  constructor(public companyDetailsService: CompanyDetailsService) {}

  ngOnInit(): void {}
}
