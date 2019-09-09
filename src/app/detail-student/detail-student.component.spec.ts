import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStudentComponent } from './detail-student.component';

describe('DetailStudentComponent', () => {
  let component: DetailStudentComponent;
  let fixture: ComponentFixture<DetailStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
