import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxStripeModule } from 'ngx-stripe';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './pages/about/about.component';
import { MapComponent } from './pages/map/map.component';
import { NotFoundComponent } from './pages/not_found/not-found.component';
import { PaymentModule } from './payment/payment.module';
import { PostModule } from './post/post.module';
import { ProductModule } from './products/product.module';
import { SearchComponent } from './products/search/search.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthGuard } from './_guard/auth.guard';
import { CheckoutGuard } from './_guard/checkout.guard';
import { PaymentGuard } from './_guard/payment.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SearchComponent,
    AboutComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    HomeModule,
    ProductModule,
    PostModule,
    UserModule,
    PaymentModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxStripeModule.forRoot('pk_test_28owFDjd02mGhWN5XUDoq1S700UciXGH9F'),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    AuthGuard,
    DatePipe,
    PaymentGuard,
    CheckoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
