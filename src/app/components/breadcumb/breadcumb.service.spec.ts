/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreadcumbService } from './breadcumb.service';

describe('Service: Breadcumb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcumbService]
    });
  });

  it('should ...', inject([BreadcumbService], (service: BreadcumbService) => {
    expect(service).toBeTruthy();
  }));
});
