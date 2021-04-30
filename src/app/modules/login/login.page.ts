import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { CheckoutService } from '../checkout/checkout.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = '';
  url: string = 'https://docs.google.com/forms/d/e/1FAIpQLSfQkUY7lr72heFFt0wzwUWyAHVPYdwRDwBuZhu-K3B1JEKgJA/viewform'
  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    private checkoutService: CheckoutService,
    public toastController: ToastController) {
  }

  async ionViewWillEnter() {
    const t = this.authService.getTransaction();
    this.email = '';
    if (t) {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Muchas gracias!',
        message: 'Puedes acceder a la encuesta a través de: <a>https://docs.google.com/forms/d/e/1FAIpQLSfQkUY7lr72heFFt0wzwUWyAHVPYdwRDwBuZhu-K3B1JEKgJA/viewform</a>. <br><br>También hemos enviado el link a tu correo.',
        buttons: [
          {
            text: 'Vamos a responderla!',
            handler: () => {
              window.open(this.url, "_blank");
            }
          }
        ]
      });
  
      alert.present();
    }
  }



  async register() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenido!',
      message: '<strong>1-</strong>Realiza una compra para ti y tus amigos <br><strong>2-</strong>No tienes limites de tiempo, ni dinero <br><strong>3-</strong>La prueba finaliza al ir al carrito y finalizar el pedido <br><strong>4-</strong>No requiere datos personales ni de pago es un prototipo<br><strong>5-</strong>Finalmente, contesta nuestra encuesta de satisfacción.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Vamos!',
          handler: () => {
            console.log('Confirm Okay');
            this.authService.login(this.email).subscribe(async (u: any) => {
              this.checkoutService.newCart(u.pk).subscribe(c => {
                u.cartPk = c.pk
                this.authService.setLocalUser(u).then( async r => {
                  this.router.navigate(['tabs','menu']);
                })
              });
            }, async err => {
              if( err && err.error && err.error.user && err.error.user.username ) {
                const toast = await this.toastController.create({
                  message: 'Parece que has realizado ya esta prueba! Si aún no has hecho la encuesta de invitamos a revisar el correo que te hemos enviado para completarla.',
                  duration: 6500,
                  color: 'success',
                  position: 'middle'
                });
                toast.present();
              }
            });
          }
        }
      ]
    });

    alert.present();

  }

}
