import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {
    this.getJobs('Mid%20Level', 1);
  }

  jobs = <any>[];
  job = <any>{};

  getJobs(level: string, page: number) {
    console.log('getJobs() level: ' + level + ' & page: ' + page);
    this.getJobsAsObj(level, page).subscribe((data: any) => {
      console.log(data.results);
      if (data.results.length != 0) {
        this.jobs = data.results;
      } else {
        alert(`No jobs available for ${level}`);
      }
    });
  }

  getJobsAsObj(level: string, page: number): Observable<any> {
    console.log('sentinella inizio');
    console.log('getJobsAsObj() level: ' + level + ' & page: ' + page);
    return this.http.get(
      `https://www.themuse.com/api/public/jobs?category=Science%20and%20Engineering&level=${level}&page=${page}`
    );
  }

  getJobDetail() {
    console.log('sentinella dei dettagli del LAVORO');
    let currentUrl = window.location.href;
    let idInUrl = currentUrl.split('/').pop();
    const apiCall = this.http.get(
      'https://www.themuse.com/api/public/jobs/' + idInUrl
    );
    apiCall.subscribe((data: any) => {
      console.log(data);
      this.job = data;
    });
  }

  htmlConverter(contents: string) {
    let a = contents.replace(/(<([^>]+)>)/gi, '');
    return a;
  }
}
