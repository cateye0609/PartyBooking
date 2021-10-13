import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardLoadingComponent } from './card-loading.component';

describe('CardLoadingComponent', () => {
  let component: CardLoadingComponent;
  let fixture: ComponentFixture<CardLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
