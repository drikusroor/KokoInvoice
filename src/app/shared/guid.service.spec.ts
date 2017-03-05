/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuidService } from './guid.service';

describe('GuidServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuidService]
    });
  });

  it('should ...', inject([GuidService], (service: GuidService) => {
    expect(service).toBeTruthy();
  }));
});
