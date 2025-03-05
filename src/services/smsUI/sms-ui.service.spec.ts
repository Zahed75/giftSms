import { TestBed } from '@angular/core/testing';

import { SmsUIService } from './sms-ui.service';

describe('SmsUIService', () => {
  let service: SmsUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
