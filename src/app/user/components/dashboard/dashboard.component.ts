import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { CustomerService } from '../../service/customer.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

interface Product {
  id: number;
  name: string;           
  description: string;
  price: number;
  categoryName: string;
  returnedImage?: string;
  processedImage?: string;
}


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  products: Product[] = [];
  size: NzButtonSize = 'large';
  searchForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: [null],
    });

    this.getAllProducts();
  }

  onSearchProduct() {
  this.products = [];
  this.customerService
    .searchProduct(this.searchForm.get('title')!.value)
    .subscribe((res: Product[]) => {
      res.forEach((element: Product) => {           
        element.processedImage =
          'data:image/jpeg;base64,' + element.returnedImage;
        this.products.push(element);
      });
    });
}

getAllProducts() {
  this.products = [];
  this.customerService.getAllProducts().subscribe((res: Product[]) => {
    console.log('All products: ', res);
    res.forEach((element: Product) => {             // ✅ type element
      element.processedImage =
        'data:image/jpeg;base64,' + element.returnedImage;
      this.products.push(element);
    });
  });
}

  addProductToCart(productId: number) {
    console.log('product id: ', productId);
    this.customerService.addProductToCart(productId).subscribe((res) => {
      console.log('Add product to cart: ', res);
      this.notification.success("SUCCESS", 'Product added to cart', {nzDuration: 5000})
    }, error => {
      console.log('Error', error)
      this.notification.error("ERROR", 'Product already exists in cart', {nzDuration: 5000})
    })
  }
}