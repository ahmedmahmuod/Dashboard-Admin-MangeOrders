import { Component, inject, Input } from '@angular/core';
import { Product } from '../../Models/product.model';
import { ProductsService } from '../../Services/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input({ required: true }) productData!: Product;
  private productService = inject(ProductsService);
  public meassageService = inject(MessageService);
  allCategories: string[] = [];
  visible: boolean = false;
  actionType: 'edit' = 'edit';
  isSpinner: boolean = false;

  constructor() {
    this.getAllCategories();
  }

  // Open Dialog for editing an existing product
  openDialog() {
    this.visible = true;
  }

  // Close Dialog
  onCloseDialog(visible: boolean) {
    this.visible = visible;
  }

  // edit Product
  editProduct() {
    console.log(this.productData.category);
    this.openDialog();
  }

  // On update product 
  onEditProduct(product: Product) {
    this.isSpinner = true;
    this.productService.updateProduct(product).subscribe((res) => {
      this.meassageService.add({ severity: 'success', summary: 'Success', detail: 'The product Updated successfully!' });
      this.isSpinner = false;

    })
  }

  // Delete Product
  onDeleteProduct(id: number) {
    this.isSpinner = true;
    this.productService.deleteProduct(id).subscribe((res) => {
      this.meassageService.add({ severity: 'success', summary: 'Success', detail: 'The product Deleted successfully!' });
      this.isSpinner = false;
    })
  }

  // Reset form when adding a new product
  resetForm() {
    this.productData = {
      id: 0,
      title: '',
      price: '',
      description: '',
      image: '',
      quantity: 1,
      category: ''
    };
  }

  // Get all Categories
  getAllCategories() {
    return this.productService.getAllCategories().subscribe((category: any) => {
      this.allCategories = category;
    });
  }
}