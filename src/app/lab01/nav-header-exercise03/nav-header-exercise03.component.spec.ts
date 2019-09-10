import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderExercise03Component } from './nav-header-exercise03.component';

describe('NavHeaderExercise03Component', () => {
  let component: NavHeaderExercise03Component;
  let fixture: ComponentFixture<NavHeaderExercise03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeaderExercise03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderExercise03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
