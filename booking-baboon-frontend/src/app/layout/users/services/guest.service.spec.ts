import {TestBed} from '@angular/core/testing';

import {GuestService} from './guest.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../env/env";
import {mockGuest1, mockGuest2, mockGuestArray} from "../mocks/guests.service.mock";
import {Reservation} from "../../reservations/models/reservation.model";
import {ReservationStatus} from "../../reservations/models/reservation-status.enum";
import {mockReservationRequest1} from "../../reservations/mocks/reservation.service.mock";
import {Guest} from "../models/guest.model";
import {mockAccommodationArray} from "../../accommodations/mocks/accommodations.service.mock";


describe('GuestService', () => {
  let service: GuestService;
  let httpController: HttpTestingController;

  let url = environment.apiHost;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call getAll and return a list of guests from the API', () => {

    service.getAll().subscribe((data) => {
      expect(data).toEqual(mockGuestArray);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}guests`,
    });

    req.flush(mockGuestArray);
  });

  it('should call getGuest and return a single guest from the API', () => {
    const id = 1;

    service.get(id).subscribe((data) => {
      expect(data).toEqual(mockGuest1);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}guests/1`,
    });

    req.flush(mockGuest1);
  });

  it('should call delete and return a deleted guest from the API', () => {
    const id = 1;

    service.delete(id).subscribe((data) => {
      expect(data).toEqual(mockGuest1);
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${url}guests/1`,
    });

    req.flush(mockGuest1);
  });

  it('should call create and return the created reservation from the API', () => {
    const updatedGuest: Guest = {
      id: 2,
      email: 'guest2@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Oak St',
      phoneNumber: '555-5678',
      status: UserStatus.Active,
      role: Role.GUEST,
      ignoredNotifications: [],
      favorites: [
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    };


    service.update(updatedGuest).subscribe((data) => {
      expect(data).toEqual(mockGuest1);
    });


    const req = httpController.expectOne({
      method: 'PUT',
      url: `${url}guests`,
    });

    req.flush(updatedGuest);
  });

  it('should call addFavorite and return a single guest from the API', () => {
    const id = 1;
    const accommodationId =2;

    service.addFavorite(id, accommodationId).subscribe((data) => {
      expect(data).toEqual(mockGuest1);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}guests/favorite-accommodations/add/2`,
    });

    req.flush(mockGuest1);
  });

  it('should call removeFavorite and return a single guest from the API', () => {
    const id = 1;
    const accommodationId =2;

    service.removeFavorite(id, accommodationId).subscribe((data) => {
      expect(data).toEqual(mockGuest1);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}guests/favorite-accommodations/remove/2`,
    });

    req.flush(mockGuest1);
  });

  it('should call getFavorites and return a list of guests favorite accommodations from the API', () => {
    const id = 1;

    service.getFavorites(id).subscribe((data) => {
      expect(data).toEqual(mockAccommodationArray);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}guests/2/favorite-accommodations`,
    });

    req.flush(mockGuest1);
  });

});

enum UserStatus{
  Inactive= "Inactive",
  Active="Active",
  Blocked="Blocked"
}

enum Role{
  UNAUTHORIZED,
  GUEST,
  HOST,
  ADMIN
}
