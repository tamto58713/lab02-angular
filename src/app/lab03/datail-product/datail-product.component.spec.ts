import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailProductComponent } from './datail-product.component';

describe('DatailProductComponent', () => {
  let component: DatailProductComponent;
  let fixture: ComponentFixture<DatailProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
