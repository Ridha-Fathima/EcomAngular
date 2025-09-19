import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  totalAmout!: number;
  cartProducts: any = [];

  constructor(
    private customerService: CustomerService,
    private nofitication: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getCartByUserId();
  }

  getCartByUserId() {
    this.customerService.getCartByUserId().subscribe((res) => {
      console.log('CartItems: ', res);
      this.cartProducts = res.cartItemDTOList;
      this.totalAmout = res.amount;
      console.log(this.cartProducts);
    });
  }

  increaseQuantityOfProduct(productId: number) {
    this.customerService
      .increaseQuantityOfProduct(productId)
      .subscribe((res) => {
        console.log('Increase quantity: ', res);
        this.nofitication.success('SUCCESS', 'Increased', { nzDuration: 5000 });
        this.getCartByUserId();
      });
  }

  decreaseQuantityOfProduct(productId: number) {
    this.customerService
      .decreaseQuantityOfProduct(productId)
      .subscribe((res) => {
        console.log('Decrease quantity: ', res);
        this.nofitication.success('SUCCESS', 'Decreased', { nzDuration: 5000 });
        this.getCartByUserId();
      });
  }
}