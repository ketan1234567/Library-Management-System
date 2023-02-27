import { TestBed } from '@angular/core/testing';

import { MyNewGuardGuard } from './my-new-guard.guard';

describe('MyNewGuardGuard', () => {
  let guard: MyNewGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyNewGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
