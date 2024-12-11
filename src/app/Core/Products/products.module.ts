import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { SharedModule } from "../../Shared/shared.module";
import { ProductComponent } from './Components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterLink,
    BrowserAnimationsModule,
    CardModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [MessageService]
})
export class ProductsModule { }
