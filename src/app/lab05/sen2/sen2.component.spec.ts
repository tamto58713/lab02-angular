import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sen2Component } from './sen2.component';

describe('Sen2Component', () => {
  let component: Sen2Component;
  let fixture: ComponentFixture<Sen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
