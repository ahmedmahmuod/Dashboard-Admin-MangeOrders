import { SelectDOMComponent } from './Components/select-dom/select-dom.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./Components/header/header.component";
import { RouterModule, RouterLink } from "@angular/router";
import { SpinnerComponent } from "./Components/spinner/spinner.component";
import { CartDialogComponent } from './Components/dialog/cart-dialog.component';
import { DialogAddProductComponent } from './Components/dialog-add-product/dialog-add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
    declarations: [HeaderComponent, SpinnerComponent, SelectDOMComponent, CartDialogComponent, DialogAddProductComponent],
    imports: [CommonModule, RouterLink, RouterModule, FormsModule, DialogModule, ButtonModule, ReactiveFormsModule],
    providers: [],
    exports: [HeaderComponent, SpinnerComponent, SelectDOMComponent, CartDialogComponent, DialogAddProductComponent]
})

export class SharedModule { }