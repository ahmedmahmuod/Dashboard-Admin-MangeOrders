import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/products.service';


@Component({
  selector: 'app-products-details',
  standalone: false,
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})

export class ProductsDetailsComponent {
  private productsService = inject(ProductsService);
  private route = inject(ActivatedRoute);
  productData: any = {};
  productId: any;
  loading: boolean = false;

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductDetails();
  }

  getProductDetails() {
    this.loading = true
    this.productsService.getProductDetailsById(this.productId).subscribe((product: {}) => {
      this.loading = false;
      this.productData = product;
    })
  }
}
