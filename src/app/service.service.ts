import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 
    
  }
  login(data: any) {
    return this.http.post('http://localhost:9090/api/v1/auth/authenticate', data);
  }
  addred(data:any) {
    return this.http.post('http://localhost:9090/api/mall-1/Reduction/add', data);
  }
  updatered(id: any, data: any) {
    return this.http.put(`http://localhost:9090/api/mall-1/Reduction/update/${id}`, data);
  }
  deletred(data:any) {
    return this.http.delete('http://localhost:9090/api/mall-1/Reduction/delete/'+data);
  } 
  addshop(data:any) {
    return this.http.post('http://localhost:9090/api/mall-1/Shop/add', data);
  }
  updateshop(id: any, data: any) {
    return this.http.put(`http://localhost:9090/api/mall-1/Shop/update/${id}`, data);
  }
  deleteshop(data: any) {
    return this.http.delete('http://localhost:9090/api/mall-1/Shop/delete/' + data);
  }
  
  addProd(data:any) {
    return this.http.post('http://localhost:9090/api/mall-1/Product/add', data);
  }
  updateprod(id: any, data: any) {
    return this.http.put(`http://localhost:9090/api/mall-1/Product/update/${id}`, data);
  }
  deletprod(data:any) {
    return this.http.delete('http://localhost:9090/api/mall-1/Product/delete/'+data);
  } 
  updateCategory(id: any, data: any) {
    return this.http.put(`http://localhost:9090/api/mall-1/Category/update/${id}`, data);
  }
  
  addcat(data: any) {
    return this.http.post('http://localhost:9090/api/mall-1/Category/add', data);
  }
  
  deletcat(data:any) {
    return this.http.delete('http://localhost:9090/api/mall-1/Category/delete/'+data);
  } 
  chercher_Shops(Category:any): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Shop/shops/category/'+Category);
  } 
  get_categories(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Category/categories');
  }
  get_products(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Product/products');
  }
  get_shops(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Shop/shops');
  }
  get_reduction(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Reduction/reductions');
  }
}

