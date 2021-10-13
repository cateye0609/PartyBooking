import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';
import { CheckoutGuard } from '../_guard/checkout.guard';
import { UserCartComponent } from './Cart/user-cart/user-cart.component';
import { UserCheckoutComponent } from './Cart/user-checkout/user-checkout.component';
import { EditInfoComponent } from './Edit profile/edit-info/edit-info.component';
import { EditPasswordComponent } from './Edit profile/edit-password/edit-password.component';
import { EditPictureComponent } from './Edit profile/edit-picture/edit-picture.component';
import { EditProfileComponent } from './Edit profile/edit-profile/edit-profile.component';
import { UserCartInfoComponent } from './Profile/user-cart-info/user-cart-info.component';
import { UserInfoComponent } from './Profile/user-info/user-info.component';
import { UserProfileComponent } from './Profile/user-profile/user-profile.component';

const routes: Routes = [
    {
        path: 'profile', component: UserInfoComponent,
        children: [
            { path: '', redirectTo: 'yourprofile', pathMatch: 'full' },
            { path: 'yourprofile', component: UserProfileComponent },
            { path: 'yourcart', component: UserCartInfoComponent }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'editProfile', component: EditInfoComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: EditProfileComponent },
            { path: 'picture', component: EditPictureComponent },
            { path: 'password', component: EditPasswordComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'cart', component: UserCartComponent },
    { path: 'checkout', component: UserCheckoutComponent, canActivate: [AuthGuard, CheckoutGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }