import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab07Component } from './lab07.component';

describe('Lab07Component', () => {
  let component: Lab07Component;
  let fixture: ComponentFixture<Lab07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
