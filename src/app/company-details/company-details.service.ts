import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyDetailsService {
  constructor(private http: HttpClient) {
    this.getJobDetail();
  }

  detail = <any>{};

  getDetails() {
    this.getDetailsAsObj().subscribe((data: any) => {
      console.log(data);
      // this.jobs.push(JSON.stringify(data.results));
      this.detail = data;
    });
  }

  getDetailsAsObj(): Observable<any> {
    console.log('sentinella inizio');
    return this.http.get(
      'https://www.themuse.com/api/public/jobs?category=Science%20and%20Engineering&page=1'
    );
  }

  getJobDetail() {
    console.log('sentinella dei dettagli dell AZIENDA');
    let currentUrl = window.location.href;
    let idInUrl = currentUrl.split('/').pop();
    const apiCall = this.http.get(
      'https://www.themuse.com/api/public/companies/' + idInUrl
    );
    apiCall.subscribe((data: any) => {
      console.log(data);
      this.detail = data;
    });
  }
}
