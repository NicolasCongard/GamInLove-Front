import { TestBed } from '@angular/core/testing';

import { MpService } from './mp.service';

describe('MpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MpService = TestBed.get(MpService);
    expect(service).toBeTruthy();
  });
});
