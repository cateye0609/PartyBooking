import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductsResolver } from './products.resolver';


@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [ProductsResolver]
})
export class HomeModule { }
