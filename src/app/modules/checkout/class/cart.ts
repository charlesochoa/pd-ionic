import { Product } from "../../menu/class/product";
import { CartProduct } from "./cart-product";
import { User } from "./user";

export class Cart {
  pk?: string;
  creation_date?: Date;
  cart_products?: CartProduct[];
  ddp_user?: User;
  subtotal?: number;
  subtotalSinIva?: number;
  delivery?: number;
  discounts?: number;
  iva?: number;
  total?: number;

  constructor() {
    this.pk = "";
    this.creation_date = null;
    this.cart_products = [];
    this.ddp_user = null;
    this.subtotal = 0;
    this.subtotalSinIva = 0;
    this.delivery = 2.5;
    this.discounts = 0.3;
    this.iva = 0.21;
  }
}
