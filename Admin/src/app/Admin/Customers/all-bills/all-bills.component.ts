import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

// Models
import { Bill, Bill_item } from '../../../_models/bill.model';
//Services
import { StatisticalService } from '../../../_services/statistical.service';
import { PaymentService } from '../../../_services/payment.service';
import { ProductService } from '../../../_services/product.service';

declare var $: any;
@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {
  total_pages: number;
  all_bills: Bill[] = [];
  bill_detail: Bill_item[] = [];
  current_bill: Bill;

  dtTrigger: Subject<any> = new Subject();

  constructor(
    public statisticalService: StatisticalService,
    public paymentService: PaymentService,
    public productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.onload();
  }

  private onload() {
    this.get_allBills(1);
  }
  // Tạo datatables 
  datatable_generate() {
    if ($.fn.DataTable.isDataTable('#allBillTable')) {
      $('#allBillTable').DataTable().fnDraw();
    }

    $('#allBillTable').DataTable({
      "paging": false,
      "bInfo": false,
    });
  }
  // Khi click vào bill trong list
  itemClicked(item: Bill) {
    this.current_bill = item;
    this.bill_detail = item.dishes;
  }

  // Thanh toán bill
  pay(bill_id: string) {
    if (confirm("Pay this bill?")) {
      this.paymentService.pay_bill(bill_id);
    };
  }

  // // Xóa bill
  // delete_bill(bill_id) {
  //   if (confirm("Are you sure to delete this bill?")) {
  //     this.paymentService.delete_bill(bill_id);
  //   };
  // }

  // Lấy danh sách bill và tạo datatable
  get_allBills(page: number) {
    this.paymentService.get_bills_list(page).subscribe(
      res => {
        this.all_bills = res.data.value as Bill[];
        this.total_pages = res.data.total_page;
        this.dtTrigger.next();
      },
      err => {
        console.log("Error: " + err.error.text);
        sessionStorage.setItem('error', JSON.stringify(err));
      },
      // () => {
      //   setTimeout(() => {
      //     this.datatable_generate();
      //   }, 1000)
      // }
    )
  }

  // Xác nhận đơn hàng
  confirm_bill(note: string) {
    this.paymentService.confirm_bill(this.current_bill._id, note).subscribe(
      res => {
        this.toastr.success("Confirm bill success!");
        this.onload();
      },
      err => {
        this.toastr.error("Failed confirm bill!");
        console.log("Error: " + err.error.message);
      }
    )
  }

  // Hủy đơn hàng
  cancel_bill(note: string) {
    this.paymentService.cancel_bill(this.current_bill._id, note).subscribe(
      res => {
        this.toastr.success("Cancel bill success!");
        this.onload();
      },
      err => {
        this.toastr.error("Failed cancel bill!");
        console.log("Error: " + err.error.message);
      }
    )
  }
}
