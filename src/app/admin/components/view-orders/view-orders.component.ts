import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-view-orders',
  standalone: false,
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.scss'
})
export class ViewOrdersComponent implements OnInit {
  isSpinning: boolean = false;
  MyOrders: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.isSpinning = true;
    this.adminService.getAllOrders().subscribe((res) => {
      console.log('all orders: ', res);
      this.isSpinning = false;
      this.MyOrders = res;
    });
  }
}