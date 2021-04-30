import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CheckoutService } from '../../modules/checkout/checkout.service';
import { Cart } from '../../modules/checkout/class/cart';
import { CartProduct } from '../../modules/checkout/class/cart-product';
import { Product } from '../../modules/menu/class/product';

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.scss'],
})
export class ListItemComponent {
  @Input() cartProduct: CartProduct;
  @Input() cart: Cart;
  @Input() disabled = false;
  @Input() visible = true;
  @Input() angularShape;
  @Output() cartChange: EventEmitter<any> = new EventEmitter();
  delayAdd = false;
  delayRemove = false;
  constructor(private checkoutService: CheckoutService,public toastController: ToastController) {
  }
  increment() {
    this.delayAdd = true;
    console.log(this.cart);
    this.checkoutService.addToCart(this.cartProduct.product.pk, this.cart.pk).subscribe(async r => {
      this.cartChange.emit({
        cart: r,
        cartProduct: r.cart_products.find(x => x.product.pk == this.cartProduct.product.pk)
      });
      this.delayAdd = false;
      const toast = await this.toastController.create({
        message: `Hecho! Subtotal de ${r.subtotal}€ acumulados!`,
        duration: 1000,
        color: 'primary'
      });
      toast.present();
    }, async err => {
      this.delayAdd = false;
      const toast = await this.toastController.create({
        message: 'Estamos teniendo problemas técnicos. Por favor, intente nuevamente.',
        duration: 1000,
        color: 'danger'
      });
      toast.present();
    });
  }

  decrement() {
    this.delayRemove = true;
    this.checkoutService.removeFromCart(this.cartProduct.product.pk, this.cart.pk).subscribe(async r => {
      this.cartChange.emit({
        cart: r,
        cartProduct: r.cart_products.find(x => x.product.pk == this.cartProduct.product.pk)
      });
      this.delayRemove = false;
      const toast = await this.toastController.create({
        message: `Hecho! Subtotal de ${r.subtotal}€ acumulados!`,
        duration: 1000,
        color: 'primary'
      });
      toast.present();
    }, async err => {
      this.delayRemove = false;
      const toast = await this.toastController.create({
        message: 'Estamos teniendo problemas técnicos. Por favor, intente nuevamente.',
        duration: 1000,
        color: 'danger'
      });
      toast.present();
    });
  }
}
