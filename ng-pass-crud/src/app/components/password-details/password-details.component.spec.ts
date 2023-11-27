import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDetailsComponent } from './password-details.component';

describe('PasswordDetailsComponent', () => {
  let component: PasswordDetailsComponent;
  let fixture: ComponentFixture<PasswordDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordDetailsComponent]
    });
    fixture = TestBed.createComponent(PasswordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
