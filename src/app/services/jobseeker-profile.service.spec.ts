import { TestBed } from '@angular/core/testing';

import { JobseekerProfileService } from './jobseeker-profile.service';

describe('JobseekerProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobseekerProfileService = TestBed.get(JobseekerProfileService);
    expect(service).toBeTruthy();
  });
});
