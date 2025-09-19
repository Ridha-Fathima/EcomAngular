import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CartComponent,
    PlaceOrderComponent,
    MyOrdersComponent,
 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
