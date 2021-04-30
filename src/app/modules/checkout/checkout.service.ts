import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Cart } from "./class/cart";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Product } from "../menu/class/product";


@Injectable({ providedIn: 'root' })
export class CheckoutService {
  constructor(private http: HttpClient) {}

  getCart(cart: string): Observable<Cart> {
    return this.http.get<Cart>(`${environment.apiUrl}carts/${cart}`);
  }

  newCart(ddp_user: string) {
    return this.http.post<Cart>(`${environment.apiUrl}carts/`, {ddp_user});
  }

  addToCart(product: string, cart: string) {
    return this.http.post<Cart>(`${environment.apiUrl}carts/${cart}/add-product/`, {product });
  }

  removeFromCart(product: string, cart: string) {
    return this.http.post<Cart>(`${environment.apiUrl}carts/${cart}/remove-product/`, {product });
  }

  makeTransaction(cart: string) {
    return this.http.post<Cart>(`${environment.apiUrl}transactions/`, {cart});
  }
}
