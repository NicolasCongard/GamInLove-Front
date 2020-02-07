import { TestBed } from '@angular/core/testing';

import { GeekService } from './geek.service';

describe('GeekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeekService = TestBed.get(GeekService);
    expect(service).toBeTruthy();
  });
});
