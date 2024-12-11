import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Models/product.model';
import { MessageService } from 'primeng/api';
 
@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  private productsService = inject(ProductsService);
  public meassageService = inject(MessageService);

  allProducts: Product[] = [];
  allCategories: string[] = [];
  isSpinner: boolean = false;
  cartData: any[] = [];
  actionType: 'add' = 'add';
  visible: boolean = false;

  // Opem Dialog
  openDialog() {
    this.visible = true;
  }

  // Close Dialog
  onCloseDialog(visible: boolean) {
    this.visible = visible;
  }

  // Add new Product
  addNewProduct(productData: any) {
    const modelProduct = productData;
    this.isSpinner = true;
    this.productsService.addNewProduct(modelProduct).subscribe(() => {
      this.isSpinner = false;
      this.meassageService.add({ severity: 'success', summary: 'Success', detail: 'The product added successfully!' });
      this.visible = false;
    })
  }

  // ##################
  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
  }

  // Get All products
  getAllProducts() {
    this.isSpinner = true;
    return this.productsService.getAllProducts().subscribe((products: any) => {
      this.allProducts = products;
      this.isSpinner = false;
    })
  }

  // Get all Categories
  getAllCategories() {
    this.isSpinner = true;
    return this.productsService.getAllCategories().subscribe((category: any) => {
      this.allCategories = category;
      this.isSpinner = false;
    });
  }

  // Get products by Category
  getProductByCategory(event: any) {
    const category = event.target.value;
    this.isSpinner = true;
    (category === 'all') ? this.getAllProducts() : this.filterProductsByCategory(category);
  }

  // Filter products by Category
  filterProductsByCategory(category: string) {
    this.productsService.getProductsByCategory(category).subscribe((product: any) => {
      this.allProducts = product;
      this.isSpinner = false;
    });
  }

}
