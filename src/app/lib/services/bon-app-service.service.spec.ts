import { TestBed } from '@angular/core/testing';

import { BonAppServiceService } from './bon-app-service.service';

describe('BonAppServiceService', () => {
  let service: BonAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
