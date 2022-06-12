import { TestBed } from '@angular/core/testing';

import { XsrfInterceptor } from './xsrf-interceptor.interceptor';

describe('XsrfInterceptorService', () => {
  let service: XsrfInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XsrfInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
