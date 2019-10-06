import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sen3Component } from './sen3.component';

describe('Sen3Component', () => {
  let component: Sen3Component;
  let fixture: ComponentFixture<Sen3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sen3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
