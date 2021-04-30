import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../login/auth.service';
import { CheckoutService } from './checkout.service';
import { Cart } from './class/cart';
import { CartProduct } from './class/cart-product';
import { User } from './class/user';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.page.html',
  styleUrls: ['checkout.page.scss']
})
export class CheckoutPage {
  user: User = null;
  cart: Cart = new Cart();
  cartProducts: CartProduct[] = [];
  delay = true;
  constructor(private checkoutService: CheckoutService,
    private authService: AuthService,
    private alertController: AlertController,
    public toastController: ToastController,
    private router: Router
    ) {}
  ionViewWillEnter(): void {
    this.authService.getLocalUser().then(u => {
      this.user = u;
      console.log(this.user);
      if (this.user.cartPk) {
        this.checkoutService.getCart(this.user.cartPk).subscribe( c => {
          this.cart.subtotal = c.subtotal;
          this.cart.pk = c.pk;
          this.calculateCart();
          this.cartProducts = c.cart_products;
          this.delay = false;
        })
      }
    },
    err => {
      this.router.navigate(['']);
    });
  }
  ionViewDidLeave(): void {
    this.cartProducts = [];
    this.cart = new Cart();
    this.delay = true;
  }

  calculateCart() {
    const iva = 0.21;
    const discounts = 0.3;
    const delivery = 2.5;
    if (this.cart.subtotal > 0 ) {
      this.cart.subtotalSinIva = this.cart.subtotal - this.cart.subtotal * iva;
      this.cart.iva = this.cart.subtotal * iva;
      this.cart.discounts = this.cart.subtotal * discounts * (-1.0);
      this.cart.delivery = delivery;
      this.cart.total = this.cart.subtotal - discounts * (-1.0) + delivery;
    } else {
      this.cart.subtotalSinIva = 0;
      this.cart.iva = 0;
      this.cart.discounts = 0;
      this.cart.delivery = 0;
      this.cart.total = 0;
    }
  }

  modifyCart(event: any, index: number) {
    this.cart.subtotal = event.cart.subtotal;
    this.cart.pk = event.cart.pk;
    if(event.cartProduct && event.cartProduct.count > 0) {
      this.cartProducts[index].count = event.cartProduct.count;
    } else {
      this.cartProducts.splice(index, 1);
    }
    this.calculateCart();
  }

  async submit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ya estás casi listo!',
      message: `¿Seguro que deseas realizar esta compra por un total de <strong>${this.cart.total} €</strong>?`,
      buttons: [
        {
          text: 'Todavía no',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Seguro!',
          handler: () => {
            this.checkoutService.makeTransaction( this.cart.pk).subscribe(async t => {
              const toast = await this.toastController.create({
                message: `¡Prueba finalizada! <strong>¡Muchisimas gracias!</strong> revisa tu correo y en cuanto puedas nos comentas qué tal te pareció nuestra propuesta!`,
                duration: 10000,
              });
              this.authService.set('t',t.pk);
              await this.authService.clear();
              toast.present();
              this.router.navigate(['login']);
            }, async err => {
              const toast = await this.toastController.create({
                message: 'Estamos teniendo problemas técnicos. Por favor, intente nuevamente.',
                duration: 1000,
                color: 'danger'
              });
              toast.present();
            });
          }
        }
      ]
    });

    alert.present();
  }
}
