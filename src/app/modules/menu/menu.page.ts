import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from '../checkout/checkout.service';
import { Cart } from '../checkout/class/cart';
import { CartProduct } from '../checkout/class/cart-product';
import { User } from '../checkout/class/user';
import { AuthService } from '../login/auth.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage  {
  user: User = null;
  cart: Cart;
  pk: string;
  cartProducts: CartProduct[] = [];
  constructor(private router: Router,
    private authService: AuthService,
    private menuService: MenuService,
    private checkoutService: CheckoutService,
    ) {}

  async ionViewWillEnter() {
    console.log('IonViewWillEnter');
    this.authService.getLocalUser().then(async u => {
      if (u) {
        this.user = u;
        if(this.cartProducts.length === 0) {
          this.menuService.getProducts().subscribe(ps => {
            ps.forEach(p => {
              this.cartProducts.push({product: p, count: 0});
            })
          });
        }
        console.log(this.user.cartPk);
        if (this.user.cartPk) {
          this.checkoutService.getCart(this.user.cartPk).subscribe(c => {
            console.log("GetCart");
            this.cart = c;
            this.loadCart(c);
          })
        } else {
          this.checkoutService.newCart(this.user.pk).subscribe(async c => {
            console.log("NewCart");
            this.cart = c;
            await this.authService.set('cartPk', c.pk);
            this.user.cartPk = c.pk;
          });
        }

        console.log(this.cartProducts);
      } else {
        this.router.navigate(['']);
      }
    },
    err => {
      this.router.navigate(['']);
    });
  }

  loadCart(cart: Cart) {
    this.cartProducts.forEach(cp => {
      const index = cart.cart_products.findIndex(x => x.product.pk === cp.product.pk);
      index >= 0 ? cp.count = cart.cart_products[index].count : 0;
    })
  }



  modifyCart(event: any, index: number) {
    this.cart = event.cart;
    this.cartProducts[index].count = event.cartProduct?.count;
  }
}
