import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductPageComponent } from './edit-product-page.component';

describe('EditProductPageComponent', () => {
  let component: EditProductPageComponent;
  let fixture: ComponentFixture<EditProductPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductPageComponent]
    });
    fixture = TestBed.createComponent(EditProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
