import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { api } from '../_api/apiUrl';
import { ApiResponse } from '../_models/response.model';
import { CommonService } from './common.service';
import { StripeService } from './stripe.service';

@Injectable({ providedIn: 'root' })
export class PaymentService {
    headers = new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
    });

    constructor(
        private http: HttpClient,
        private stripeService: StripeService,
        private commonService: CommonService
    ) { }

    pay(checkout_session_id: string) {
        this.stripeService.stripe.redirectToCheckout({
            sessionId: checkout_session_id
        }).then(function (result) {
            console.log(result.error.message);
        })
    }

    get_paymentInfo(bill_id: string) {
        const option = {
            headers: this.headers,
        }
        return this.http.get<ApiResponse>(api.get_payment + '?_id=' + bill_id, option)
            .pipe(catchError(err => this.commonService.handleError(err)));
    }
}