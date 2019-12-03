import { TestBed } from '@angular/core/testing';

import { Aaalib2Service } from './aaalib2.service';

describe('Aaalib2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Aaalib2Service = TestBed.get(Aaalib2Service);
    expect(service).toBeTruthy();
  });
});
