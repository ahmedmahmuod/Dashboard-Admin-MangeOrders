import { Routes } from '@angular/router';
import { AllProductsComponent } from './Core/Products/Components/all-products/all-products.component';
import { CartComponent } from './Core/Carts/cart/cart.component';
import { ProductsDetailsComponent } from './Core/Products/Components/products-details/products-details.component';

export const routes: Routes = [
    { path: 'products', component: AllProductsComponent },
    { path: 'products/:id/details', component: ProductsDetailsComponent },
    { path: 'orders', component: CartComponent },
    { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
