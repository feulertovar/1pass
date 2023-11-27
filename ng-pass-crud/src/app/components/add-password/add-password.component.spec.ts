import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswordComponent } from './add-password.component';

describe('AddPasswordComponent', () => {
  let component: AddPasswordComponent;
  let fixture: ComponentFixture<AddPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPasswordComponent]
    });
    fixture = TestBed.createComponent(AddPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
