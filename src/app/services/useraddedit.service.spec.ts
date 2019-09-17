import { TestBed } from '@angular/core/testing';

import { UseraddeditService } from './useraddedit.service';

describe('UseraddeditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseraddeditService = TestBed.get(UseraddeditService);
    expect(service).toBeTruthy();
  });
});
