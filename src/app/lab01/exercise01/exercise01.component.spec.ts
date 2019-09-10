import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01Component } from './exercise01.component';

describe('Exercise01Component', () => {
  let component: Exercise01Component;
  let fixture: ComponentFixture<Exercise01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
