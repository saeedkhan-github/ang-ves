import { TestBed } from '@angular/core/testing';

import { EmdataService } from './emdata.service';

describe('EmdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmdataService = TestBed.get(EmdataService);
    expect(service).toBeTruthy();
  });
});
