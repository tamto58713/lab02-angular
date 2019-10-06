import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sen102Component } from './sen102.component';

describe('Sen102Component', () => {
  let component: Sen102Component;
  let fixture: ComponentFixture<Sen102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sen102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sen102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
