import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sen101Component } from './sen101.component';

describe('Sen101Component', () => {
  let component: Sen101Component;
  let fixture: ComponentFixture<Sen101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sen101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sen101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
