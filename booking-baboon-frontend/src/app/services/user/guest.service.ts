import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../env/env";
import {HttpClient} from "@angular/common/http";
import {Guest} from "../../layout/authentication/models/guest.model";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(environment.apiHost + 'guests')
  }

  get(id: number): Observable<Guest> {
    return this.httpClient.get<Guest>(environment.apiHost + 'guests/' + id)
  }
  getByEmail(email: string): Observable<Guest> {
    return this.httpClient.get<Guest>(environment.apiHost + 'guests/email/' + email)
  }

  getProfile(email: string): Observable<Guest> {
    return this.httpClient.get<Guest>(environment.apiHost + 'guests/profile/' + email)
  }


  update(guest: Guest) {
    return this.httpClient.put<Guest>(environment.apiHost + 'guests/', guest)
      .subscribe();
  }


  // add(guest.model: Guest): Observable<Guest> {
//     headers: {
//       'Content-Type': 'application/json',
//       // Add any other headers if needed
//     }
  //   return this.httpClient.post<Guest>(environment.apiGuest + 'guest.models', guest.model)
  // }


}
