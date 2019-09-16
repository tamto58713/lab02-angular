import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLab03Component } from './home-lab03.component';

describe('HomeLab03Component', () => {
  let component: HomeLab03Component;
  let fixture: ComponentFixture<HomeLab03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLab03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLab03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
