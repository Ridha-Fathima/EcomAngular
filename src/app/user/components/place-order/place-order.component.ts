import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  standalone: false,
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent implements OnInit {
  isSpinning: boolean = false;
  placeOrderForm!: FormGroup;
  payments: String[] = ['Cash on Delivery', 'Credit/Debit card', 'Cash'];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.placeOrderForm = this.fb.group({
      address: [null, Validators.required],
      payment: [null, Validators.required],
      orderDescription: [null, Validators.required],
    });
  }

  placeOrder() {
    this.isSpinning = true;
    this.customerService
      .placeOrder(this.placeOrderForm.value)
      .subscribe((res) => {
        this.isSpinning = false;
        console.log('order placed: ', res);
        this.notification.success('SUCCESS', 'Order placed successfully', {
          nzDuration: 5000,
        });
        this.router.navigateByUrl('/user/dashboard');
      });
  }
}