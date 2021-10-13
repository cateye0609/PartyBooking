import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditPictureComponent } from './edit-picture.component';

describe('EditPictureComponent', () => {
  let component: EditPictureComponent;
  let fixture: ComponentFixture<EditPictureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
