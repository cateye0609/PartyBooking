import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafeHtml } from '../_pipes/safeHtml.pipe';
import { CardLoadingComponent } from './card-loading/card-loading.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    ScrollToTopComponent,
    CardLoadingComponent,
    SafeHtml
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    ScrollToTopComponent,
    CardLoadingComponent,
    SafeHtml
  ]
})
export class SharedModule { }
