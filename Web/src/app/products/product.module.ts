import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';
import { SharedModule } from '../shared/shared.module';
import { ProductCategoryResolver } from './product-category.resolver';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductResolver } from './product.resolver';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductCategoryComponent,
    ProductRatingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BarRatingModule,
    ProductRoutingModule
  ],
  providers: [ProductResolver, ProductCategoryResolver]
})
export class ProductModule { }
