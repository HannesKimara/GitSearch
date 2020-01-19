import { TestBed } from '@angular/core/testing';

import { GitHTTPService } from './git-http.service';

describe('GitHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHTTPService = TestBed.get(GitHTTPService);
    expect(service).toBeTruthy();
  });
});
