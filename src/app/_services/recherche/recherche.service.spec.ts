import { TestBed } from '@angular/core/testing';

import { RechercheService } from './recherche.service';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RechercheService = TestBed.get(RechercheService);
    expect(service).toBeTruthy();
  });
});
