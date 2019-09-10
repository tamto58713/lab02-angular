import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChangeExerciseComponent } from './nav-change-exercise.component';

describe('NavChangeExerciseComponent', () => {
  let component: NavChangeExerciseComponent;
  let fixture: ComponentFixture<NavChangeExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChangeExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChangeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
