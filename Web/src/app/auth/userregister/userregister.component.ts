import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) { }
  onClickSubmit(data: {
    name: string;
    email: string;
    phone: number;
    username: string;
    pwd: string;
  }) {
    this.authenticationService.signup(data).subscribe(
      res => {
        this.toastr.success("Register success!");
        sessionStorage.setItem('response', JSON.stringify(res.body));
        this.router.navigate(['/user_login']);
      },
      err => {
        this.toastr.error("Error: " + err.status + " " + err.error.message);
        sessionStorage.setItem('error', JSON.stringify(err));
      }
    )
  }

  ngOnInit() { }

}