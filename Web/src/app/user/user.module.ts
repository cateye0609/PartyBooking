import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserCartComponent } from './Cart/user-cart/user-cart.component';
import { UserCheckoutComponent } from './Cart/user-checkout/user-checkout.component';
import { EditInfoComponent } from './Edit profile/edit-info/edit-info.component';
import { EditPasswordComponent } from './Edit profile/edit-password/edit-password.component';
import { EditPictureComponent } from './Edit profile/edit-picture/edit-picture.component';
import { EditProfileComponent } from './Edit profile/edit-profile/edit-profile.component';
import { UserCartInfoComponent } from './Profile/user-cart-info/user-cart-info.component';
import { UserInfoComponent } from './Profile/user-info/user-info.component';
import { UserProfileComponent } from './Profile/user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserInfoComponent,
    EditInfoComponent,
    EditPasswordComponent,
    EditProfileComponent,
    EditPictureComponent,
    UserProfileComponent,
    UserCartInfoComponent,
    UserCartComponent,
    UserCheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
