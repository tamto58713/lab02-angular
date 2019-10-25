import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLab08Component } from './home-lab08.component';

describe('HomeLab08Component', () => {
  let component: HomeLab08Component;
  let fixture: ComponentFixture<HomeLab08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLab08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLab08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
