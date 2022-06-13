import { Injectable } from '@angular/core';
import { JobService } from '../job.service';

@Injectable({
  providedIn: 'root',
})
export class JobSearchService {
  public page: number = 1;

  constructor() {}

  getLevelFromSelect(): string {
    var e = document.getElementById('language') as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var CurValue = (<HTMLSelectElement>(<unknown>opt)).value;
    return CurValue;
  }

  previousPage() {
    const btn = document.getElementById('previous-page') as HTMLInputElement;

    if (this.page > 2) {
      this.page--;
      return this.page;
    }
    if (this.page == 2) {
      btn.disabled = true;
      this.page--;
      return this.page;
    } else {
      btn.disabled = true;
      return this.page;
    }
  }

  nextPage() {
    const btn = document.getElementById('previous-page') as HTMLInputElement;
    this.page++;
    btn.disabled = false;
    return this.page;
  }
}
