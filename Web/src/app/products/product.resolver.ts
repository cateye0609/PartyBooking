import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.productService.get_dish(route.params['id'])
      .pipe(
        map(res => res.data),
        catchError(err => {
          console.error(err);
          return this.router.navigate(['/']);
        })
      );
  }
}