import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLab08Component } from './detail-lab08.component';

describe('DetailLab08Component', () => {
  let component: DetailLab08Component;
  let fixture: ComponentFixture<DetailLab08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLab08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLab08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
