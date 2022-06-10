import { TestBed } from '@angular/core/testing';

import { CheckSaveGuard } from './check-save.guard';

describe('CheckSaveGuard', () => {
  let guard: CheckSaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckSaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
