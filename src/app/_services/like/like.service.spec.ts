import { TestBed } from '@angular/core/testing';

import { LikeService } from './like.service';

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikeService = TestBed.get(LikeService);
    expect(service).toBeTruthy();
  });
});
