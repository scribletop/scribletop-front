import { TestBed } from '@angular/core/testing';

import { BasicErrorsInterceptor } from './basic-errors-interceptor.service';

describe('BasicErrorsInterceptor', () => {
  let service: BasicErrorsInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicErrorsInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
