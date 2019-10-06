import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sen4Component } from './sen4.component';

describe('Sen4Component', () => {
  let component: Sen4Component;
  let fixture: ComponentFixture<Sen4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sen4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
