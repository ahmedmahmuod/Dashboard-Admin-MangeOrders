import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CartDialogComponent } from '../../../Shared/Components/dialog/cart-dialog.component';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
  // imports Supports lib
  public meassageService = inject(MessageService);
  public dialogService = inject(DialogService);
  isSpinner: boolean = false;
  ref: DynamicDialogRef | undefined;


  private cartService = inject(CartService);
  private fb = inject(FormBuilder);
  cartData: any = [];
  cartForm!: FormGroup;

  ngOnInit() {
    this.getAllCarts()
    this.cartForm = this.fb.group({
      start: '',
      end: ''
    })
  }

  // Filter Apply Date
  applyFilter() {
    const dates = this.cartForm.value;
    if (dates.start === '' || dates.end === '' || dates.start === null || dates.end === null) {
      return;
    } else {
      this.isSpinner = true;
      this.cartService.getDataRange(dates.start, dates.end).subscribe((res) => {
        this.cartData = res;
        this.isSpinner = false;
      })
    }
  }

  resetFilter() {
    this.cartForm.reset()
    this.getAllCarts();
  }

  // Get All CartsModule
  getAllCarts() {
    this.isSpinner = true;
    this.cartService.getAllCarts().subscribe((res) => {
      this.cartData = res;
      this.isSpinner = false;
    })
  }

  // Delete Cart Product Order
  deleteCartProduct(id: number) {
    this.isSpinner = true;
    this.cartService.deleteCart(id).subscribe(res => {
      this.isSpinner = false;
      this.meassageService.add({ severity: 'success', summary: 'Success', detail: 'The order has been deleted successfully!' });
    })
  }

  // Show Products of Order list 
  show(cartItem: { productId: number, quantity: number }) {
    this.ref = this.dialogService.open(CartDialogComponent, {
      header: 'Order List',
      width: '70vw',
      modal: true,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      data: { products: cartItem }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
