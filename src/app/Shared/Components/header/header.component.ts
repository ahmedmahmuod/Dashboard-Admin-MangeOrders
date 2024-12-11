import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../../Core/Products/Services/products.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private productService = inject(ProductsService);
  productLength = signal<number>(0);

  ngOnInit() {
    this.productService.cartCount$.subscribe(count => {
      this.productLength.set(count);
    });
  }
}
