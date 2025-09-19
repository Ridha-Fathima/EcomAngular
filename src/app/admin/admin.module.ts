import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PostCategoryComponent,
    ViewOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
