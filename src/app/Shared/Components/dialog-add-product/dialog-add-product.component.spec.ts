import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProductComponent } from './dialog-add-product.component';

describe('DialogAddProductComponent', () => {
  let component: DialogAddProductComponent;
  let fixture: ComponentFixture<DialogAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
