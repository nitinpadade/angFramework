import { TestBed } from '@angular/core/testing';

import { GetHeadersService } from './get-headers.service';

describe('GetHeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetHeadersService = TestBed.get(GetHeadersService);
    expect(service).toBeTruthy();
  });
});
