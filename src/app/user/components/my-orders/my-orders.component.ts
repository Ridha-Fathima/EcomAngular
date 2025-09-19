import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-my-orders',
  standalone: false,
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent implements OnInit {
  isSpinning: boolean = false;
  MyOrders: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.isSpinning = true;
    this.customerService.getOrdersByUserId().subscribe((res) => {
      console.log('All orders: ', res);
      this.isSpinning = false;
      this.MyOrders = res;
    });
  }
}