import { TestBed } from '@angular/core/testing';

import { UserauthenticateService } from './userauthenticate.service';

describe('UserauthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserauthenticateService = TestBed.get(UserauthenticateService);
    expect(service).toBeTruthy();
  });
});
