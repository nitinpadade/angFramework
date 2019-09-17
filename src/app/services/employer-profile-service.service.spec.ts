import { TestBed } from '@angular/core/testing';

import { EmployerProfileServiceService } from './employer-profile-service.service';

describe('EmployerProfileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployerProfileServiceService = TestBed.get(EmployerProfileServiceService);
    expect(service).toBeTruthy();
  });
});
