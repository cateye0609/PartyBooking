import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { api } from '../_api/apiUrl';
import { ApiResponse } from '../_models/response.model';
import { CommonService } from './common.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private http: HttpClient,
        private commonService: CommonService
    ) { }

    // Lấy thông tin user
    get_userInfo() {
        let headers = new HttpHeaders({
            'Authorization': localStorage.getItem('token'),
        })
        return this.http.get<ApiResponse>(api.profile, { headers: headers })
            .pipe(catchError(err => this.commonService.handleError(err)));
    }

    // Lấy thông tin lịch sử đơn hàng
    get_cartHistory(page: number) {
        let headers = new HttpHeaders({
            'Authorization': localStorage.getItem('token'),
        })
        return this.http.get<ApiResponse>(api.cart_history + "?page=" + page, { headers: headers })
            .pipe(catchError(err => this.commonService.handleError(err)));
    }
}