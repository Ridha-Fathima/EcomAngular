import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../admin-service/admin.service';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryName: string;
  returnedImage?: string;    // whatever you get from backend
  processedImage?: string;   // you add this on frontend
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent implements OnInit {
products: Product[] = [];

  constructor(
    private adminService: AdminService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

 getAllProducts() {
    this.products = [];
    this.adminService.getAllProducts().subscribe((res: Product[]) => {
      console.log('All products: ', res);
      res.forEach((element) => {
        element.processedImage =
          'data:image/jpeg;base64,' + element.returnedImage;
        this.products.push(element);
      });
    });
  }

  onDeleteProduct(productId: number) {
    this.adminService.deleteProduct(productId).subscribe(() => {
      this.notification.success('SUCCESS', 'Product deleted successfully', {
        nzDuration: 5000,
      });
      this.getAllProducts();
    });
  }
}