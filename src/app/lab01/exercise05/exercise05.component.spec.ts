import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise05Component } from './exercise05.component';

describe('Exercise05Component', () => {
  let component: Exercise05Component;
  let fixture: ComponentFixture<Exercise05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
