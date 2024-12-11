import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../Shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, FormsModule, SharedModule, ToastModule, ReactiveFormsModule, ButtonModule, DynamicDialogModule],
  exports: [CartComponent],
  providers: [DialogService]

})
export class CartsModule { }
