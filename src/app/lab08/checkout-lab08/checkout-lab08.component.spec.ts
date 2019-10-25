import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutLab08Component } from './checkout-lab08.component';

describe('CheckoutLab08Component', () => {
  let component: CheckoutLab08Component;
  let fixture: ComponentFixture<CheckoutLab08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutLab08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutLab08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
