import {TestBed} from '@angular/core/testing';

import {GuestService} from './guest.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../env/env";
import {mockGuest1, mockGuestArray} from "../mocks/guests.service.mock";


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

});
