import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongPathComponent } from './wrong-path.component';

describe('WrongPathComponent', () => {
  let component: WrongPathComponent;
  let fixture: ComponentFixture<WrongPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
