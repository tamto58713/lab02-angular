import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab04Component } from './lab04.component';

describe('Lab04Component', () => {
  let component: Lab04Component;
  let fixture: ComponentFixture<Lab04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
