import { TestBed, inject } from '@angular/core/testing';

import { SimilarPostsService } from './similar-posts.service';

describe('SimilarPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimilarPostsService]
    });
  });

  it('should be created', inject([SimilarPostsService], (service: SimilarPostsService) => {
    expect(service).toBeTruthy();
  }));
});
