import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductsResolver } from './products.resolver';

const routes: Routes = [
    {
        path: 'mainpage', component: MainpageComponent,
        resolve: {
            products: ProductsResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }