import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';
import { PaymentGuard } from '../_guard/payment.guard';
import { PaymentFailComponent } from './payment-fail/payment-fail.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PaymentComponent } from './payment-layout/payment-layout.component';
import { PaymentMobileComponent } from './payment-mobile/payment-mobile.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
    { path: 'receipt/:bill_id', component: ReceiptComponent, canActivate: [AuthGuard, PaymentGuard] },
    {
        path: 'payment', component: PaymentComponent,
        children: [
            { path: '', redirectTo: '/404', pathMatch: 'full' },
            { path: 'info', component: PaymentInfoComponent },
            { path: 'success', component: PaymentSuccessComponent },
            { path: 'cancel', component: PaymentFailComponent },
            { path: 'mobile/:session_id', component: PaymentMobileComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }