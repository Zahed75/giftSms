import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsUIComponent } from './sms-ui.component';

describe('SmsUIComponent', () => {
  let component: SmsUIComponent;
  let fixture: ComponentFixture<SmsUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsUIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
