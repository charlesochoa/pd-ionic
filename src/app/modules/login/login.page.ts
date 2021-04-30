import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { AuthService } from './auth.service';
import { CheckoutService } from '../checkout/checkout.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    private checkoutService: CheckoutService,
    public toastController: ToastController,
    private device: Device
    ) {}


  async register() {
    console.log('Device UUID is: ' + this.device.uuid);

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Bienvenido!',
        message: '- Realiza una compra para ti y tus amigos -No tienes limites de tiempo, ni dinero.\n-La prueba finaliza al ir al carrito y finalizar el pedido.\n\nNo requiere datos personales ni de pago es un prototipo.',
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
                if( err && err.error && err.error.user && err.error.user.username) {
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
