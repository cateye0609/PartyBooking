import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFailComponent } from './payment-fail/payment-fail.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PaymentComponent } from './payment-layout/payment-layout.component';
import { PaymentMobileComponent } from './payment-mobile/payment-mobile.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentRoutingModule } from './payment-routing.module';


@NgModule({
  declarations: [
    ReceiptComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    PaymentFailComponent,
    PaymentInfoComponent,
    PaymentMobileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
