import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostRoutingModule
  ]
})
export class PostModule { }
