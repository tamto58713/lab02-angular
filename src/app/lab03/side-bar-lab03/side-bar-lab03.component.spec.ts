import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLab03Component } from './side-bar-lab03.component';

describe('SideBarLab03Component', () => {
  let component: SideBarLab03Component;
  let fixture: ComponentFixture<SideBarLab03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarLab03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarLab03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
