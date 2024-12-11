import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component'
import { SharedModule } from './Shared/shared.module';
import { CartsModule } from './Core/Carts/carts.module';
import { ProductsModule } from './Core/Products/products.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterLink,
    SharedModule,
    ProductsModule,
    CartsModule,
    HttpClientModule,

  ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
