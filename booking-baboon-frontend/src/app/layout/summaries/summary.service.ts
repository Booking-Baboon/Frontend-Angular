import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accommodation} from "../accommodations/shared/models/accommodation.model";
import {environment} from "../../env/env";
import {AccommodationFilter} from "../accommodations/search/models/accommodationFilter.model";
import {AvailablePeriod} from "../accommodations/shared/models/available-period.model";
import {AccommodationMonthlySummary} from "./models/AccommodationMonthlySummary";

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private httpClient: HttpClient) {
  }

  getMonthlySummary(id: number | undefined): Observable<AccommodationMonthlySummary>{
    return this.httpClient.get<AccommodationMonthlySummary>(environment.apiHost + 'summary/monthly/' + id);
  }

}
