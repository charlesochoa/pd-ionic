import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Product } from "./class/product";

@Injectable({ providedIn: 'root' })


export class MenuService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}products/`);
  }
}
