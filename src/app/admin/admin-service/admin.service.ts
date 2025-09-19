import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../services/storage-service/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  createAuthorization(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      `Authorization`,
      `Bearer ` + LocalStorageService.getToken()
    );
  }

  postCategory(category: any): Observable<any> {
   
    return this.http.post<[]>(BASIC_URL + 'api/admin/category', category, {
      headers: this.createAuthorization(),
    })
  }

  postProduct(categoryId: number, product: any): Observable<any> {
    return this.http.post<[]>(BASIC_URL + 'api/admin/product/' + categoryId, product, {
      headers: this.createAuthorization(),
    })
  }

  getAllCategories(): Observable<any> {
   
    return this.http.get<[]>(BASIC_URL + 'api/admin/categories', {
      headers: this.createAuthorization(),
    })
  }

  getAllProducts(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + 'api/admin/products', {
      headers: this.createAuthorization(),
    })
  }
 
  getProductById(id: number): Observable<any> {
    return this.http.get<[]>(BASIC_URL + 'api/admin/product/' + id, {
      headers: this.createAuthorization(),
    })
  }

  updateProduct(categoryId: number, productId: number, productDTO: any): Observable<any> {
    return this.http.put<[]>(BASIC_URL + `api/admin/${categoryId}/product/${productId}` , productDTO, {
      headers: this.createAuthorization(),
    })
  }
  
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<[]>(BASIC_URL + 'api/admin/product/' + id, {
      headers: this.createAuthorization(),
    })
  }

  getAllOrders(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + 'api/admin/orders', {
      headers: this.createAuthorization(),
    })
  }

}