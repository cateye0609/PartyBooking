import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userInfo: User;
  constructor(
    private userService: UserService,
  ) {
  }

  get_userInfo() {
    this.userService.get_userInfo().subscribe(
      res => {
        this.userInfo = res.data as User;
      },
      err => {
        console.log("Error: " + err.error.message);
        sessionStorage.setItem('error', JSON.stringify(err));
      }
    )
  }
  ngOnInit() {
    this.get_userInfo();
  }
}