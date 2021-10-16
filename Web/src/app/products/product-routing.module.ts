import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryResolver } from './product-category.resolver';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
    {
        path: 'product/:id', component: ProductDetailComponent,
        resolve: {
            product: ProductResolver
        }
    },
    {
        path: 'category/:filter', component: ProductCategoryComponent,
        resolve: {
            productCategory: ProductCategoryResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }