import { TestBed } from '@angular/core/testing';

import { GetHouseService } from './get-house.service';

describe('GetHouseService', () => {
  let service: GetHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
