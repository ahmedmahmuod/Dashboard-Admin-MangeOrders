import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient);

  // Get all carts
  getAllCarts() {
    return this.http.get(environment.baseAPIurl + 'carts');
  }

  // Get Data Range with date (start date + end date)
  getDataRange(startDate: any, endDate: any) {
    return this.http.get(environment.baseAPIurl + `carts?startdate=${startDate}&enddate=${endDate}`)
  }

  // Delete cart Product 
  deleteCart(id: number) {
    return this.http.delete(environment.baseAPIurl + `carts/` + id);
  }

}
