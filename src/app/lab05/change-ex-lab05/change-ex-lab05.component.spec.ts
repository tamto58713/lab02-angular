import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeExLab05Component } from './change-ex-lab05.component';

describe('ChangeExLab05Component', () => {
  let component: ChangeExLab05Component;
  let fixture: ComponentFixture<ChangeExLab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeExLab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeExLab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
