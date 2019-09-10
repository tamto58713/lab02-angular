import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise03CartComponent } from './exercise03-cart.component';

describe('Exercise03CartComponent', () => {
  let component: Exercise03CartComponent;
  let fixture: ComponentFixture<Exercise03CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise03CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise03CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
