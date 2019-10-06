import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLab05Component } from './home-lab05.component';

describe('HomeLab05Component', () => {
  let component: HomeLab05Component;
  let fixture: ComponentFixture<HomeLab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
