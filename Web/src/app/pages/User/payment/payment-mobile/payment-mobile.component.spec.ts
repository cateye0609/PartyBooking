import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaymentMobileComponent } from './payment-mobile.component';

describe('PaymentMobileComponent', () => {
  let component: PaymentMobileComponent;
  let fixture: ComponentFixture<PaymentMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
