import { TestBed } from '@angular/core/testing';

import { ChechAuthGuard } from './chech-auth.guard';

describe('ChechAuthGuard', () => {
  let guard: ChechAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChechAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
