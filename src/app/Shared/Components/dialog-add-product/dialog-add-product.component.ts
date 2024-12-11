import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../Core/Products/Models/product.model';

@Component({
  selector: 'app-dialog-add-product',
  standalone: false,
  templateUrl: './dialog-add-product.component.html',
  styleUrls: ['./dialog-add-product.component.scss']
})
export class DialogAddProductComponent {
  @Input() visible: boolean = false;
  @Input() allCategories: string[] = [];
  @Input() productData: any;
  @Input({ required: true }) actionType: 'add' | 'edit' = 'add';
  @Output() productSubmitted = new EventEmitter<Product>();
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
  @Output() addProduct: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  base64: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      image: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['1', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.actionType === 'edit' && this.productData) {
      this.form.patchValue({
        title: this.productData.title,
        price: this.productData.price,
        image: this.productData.image,
        description: this.productData.description,
        quantity: this.productData.rating.count || 1,
        category: this.productData.category
      });
      this.base64 = this.productData.image || '';
    }
  }

  // On Submit dialog
  onSubmit() {
    if (this.form.valid) {
      const product = this.form.value;
      if (this.actionType === 'add') {
        this.productSubmitted.emit(product);
        this.form.reset();
      } else if (this.actionType === 'edit') {
        this.productSubmitted.emit({ ...this.productData, ...product });
      }
      this.closeDialog.emit(false);
    }
  }

  // On close dialog
  onClose() {
    if (this.actionType === 'add') {
      this.form.reset();
      this.base64 = '';
      const fileInput: HTMLInputElement = document.querySelector('#image') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } else if (this.actionType === 'edit') {
      this.form.patchValue(this.productData);
      this.base64 = this.productData.image || '';
    }
    this.closeDialog.emit(false);
  }

  // Get image and convert path to base64
  getImgPath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result as string;
      this.form.get('image')?.setValue(this.base64);
    };
  }

  // Get selected category
  getSelectCategory(event: any) {
    const categoryValue = event.target.value;
    this.form.get('category')?.setValue(categoryValue);
  }
}
