import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLab03Component } from './nav-lab03.component';

describe('NavLab03Component', () => {
  let component: NavLab03Component;
  let fixture: ComponentFixture<NavLab03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLab03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLab03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
