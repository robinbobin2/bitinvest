import { TestBed, inject } from '@angular/core/testing';

import { SidebarResolverService } from './sidebar-resolver.service';

describe('SidebarResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarResolverService]
    });
  });

  it('should be created', inject([SidebarResolverService], (service: SidebarResolverService) => {
    expect(service).toBeTruthy();
  }));
});
