import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../_services/authentication.service';

declare var toastr;

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
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
        toastr.success("Register success!");
        sessionStorage.setItem('response', JSON.stringify(res.body));
        this.router.navigate(['/user_login']);
      },
      err => {
        toastr.error("Error: " + err.status + " " + err.error.message);
        sessionStorage.setItem('error', JSON.stringify(err));
      }
    )
  }

  ngOnInit() { }

}