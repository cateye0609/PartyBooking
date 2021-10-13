import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
    { path: 'user_login', component: UserloginComponent },
    { path: 'user_register', component: UserregisterComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }