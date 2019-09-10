import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise04DetailProductComponent } from './exercise04-detail-product.component';

describe('Exercise04DetailProductComponent', () => {
  let component: Exercise04DetailProductComponent;
  let fixture: ComponentFixture<Exercise04DetailProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise04DetailProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise04DetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
