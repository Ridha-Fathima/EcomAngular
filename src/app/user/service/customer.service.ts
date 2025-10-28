import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../../services/storage-service/local-storage.service';

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  createAuthorization(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      `Authorization`,
      `Bearer ` + LocalStorageService.getToken()
    );
  }

  getAllProducts(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + 'api/customer/products', {
      headers: this.createAuthorization(),
    });
  }

  searchProduct(title: string): Observable<any> {
    return this.http.get<[]>(
      BASIC_URL + 'api/customer/product/search/' + title,
      {
        headers: this.createAuthorization(),
      }
    );
  }

addProductToCart(productId: number): Observable<any> {
    let cartDTO = {
      productId: productId,
      userId: LocalStorageService.getUser(),
    };
    console.log('cartdto: ', cartDTO);

    return this.http.post<[]>(BASIC_URL + 'api/customer/cart', cartDTO
   
    );
  }


  getCartByUserId(): Observable<any> {
    
    return this.http.get<[]>(
      BASIC_URL + 'api/customer/cart/' + LocalStorageService.getUser(),
      {
        headers: this.createAuthorization(),
      }
    );
  }

  increaseQuantityOfProduct(productId: number): Observable<any> {
    let userId = LocalStorageService.getUser();
    return this.http.get<[]>(
      BASIC_URL + `api/customer/${userId}/add/${productId}`,
      {
        headers: this.createAuthorization(),
      }
    );
  }

  decreaseQuantityOfProduct(productId: number): Observable<any> {
    let userId = LocalStorageService.getUser();
    return this.http.get<[]>(
      BASIC_URL + `api/customer/${userId}/deduct/${productId}`,
      {
        headers: this.createAuthorization(),
      }
    );
  }

  placeOrder(placeOrder: any): Observable<any> {
    placeOrder.userId = LocalStorageService.getUser();
    return this.http.post<[]>(BASIC_URL + 'api/customer/placeOrder', placeOrder,{
      headers: this.createAuthorization(),
    });
  }

  getOrdersByUserId(): Observable<any> {
    return this.http.get<[]>(
      BASIC_URL + 'api/customer/orders/' + LocalStorageService.getUser(),
      {
        headers: this.createAuthorization(),
      }
    );
  }
}