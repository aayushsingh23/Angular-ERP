import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegisterationComponent } from './new-registeration.component';

describe('NewRegisterationComponent', () => {
  let component: NewRegisterationComponent;
  let fixture: ComponentFixture<NewRegisterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegisterationComponent]
    });
    fixture = TestBed.createComponent(NewRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
