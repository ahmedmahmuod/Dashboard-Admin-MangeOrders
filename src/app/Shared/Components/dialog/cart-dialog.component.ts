import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-cart-dialog',
  template: `
    <div *ngIf="isSpinner" class="text-center">
      <div class="text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    
    <div *ngIf="!isSpinner" class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="thead-light">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of detailedProducts">
            <td><img [src]="product.image" alt="{{ product.title }}" class="img-thumbnail" width="50"></td>
            <td>{{ product.title }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }} L.E</td>
            <td>{{ product.price * product.quantity }} L.E</td>
          </tr>
        </tbody>
      </table>
      <button (click)="closeDialog()" class="btn btn-primary rounded shadow float-end">Close</button>
    </div>
  `
})
export class CartDialogComponent implements OnInit {
  products: { productId: number; quantity: number }[] = [];
  detailedProducts: any[] = [];
  isSpinner: boolean = false;

  constructor(public config: DynamicDialogConfig, private http: HttpClient, private ref: DynamicDialogRef) { }

  ngOnInit() {
    this.products = this.config.data.products;
    this.fetchProductDetails();
  }

  fetchProductDetails() {
    this.isSpinner = true;
    const requests = this.products.map((p) =>
      this.http.get(environment.baseAPIurl + `products/${p.productId}`).toPromise()
    );

    Promise.all(requests).then((responses: any[]) => {
      this.detailedProducts = responses.map((product, index) => ({ ...product, quantity: this.products[index].quantity }));
      this.isSpinner = false;
    });
  }

  closeDialog() {
    this.ref.close()
  }
}
