import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLab08Component } from './cart-lab08.component';

describe('CartLab08Component', () => {
  let component: CartLab08Component;
  let fixture: ComponentFixture<CartLab08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartLab08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLab08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
