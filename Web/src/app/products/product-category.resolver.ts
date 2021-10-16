import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

declare interface ProductCategory {
  value: Product[],
  total_page: number
}

@Injectable()
export class ProductCategoryResolver implements Resolve<ProductCategory> {

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductCategory> {
    return this.productService.get_dish_by_category(route.params['filter'], 1)
      .pipe(
        map(res => res.data),
        catchError(err => {
          console.error(err);
          return this.router.navigate(['/']);
        })
      );
  }
}
