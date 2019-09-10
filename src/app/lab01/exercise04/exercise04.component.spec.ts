import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise04Component } from './exercise04.component';

describe('Exercise04Component', () => {
  let component: Exercise04Component;
  let fixture: ComponentFixture<Exercise04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
