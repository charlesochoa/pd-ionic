import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { User } from "../checkout/class/user";
import { Storage } from '@ionic/storage-angular';
import { DeviceDetectorService, DeviceInfo } from "ngx-device-detector";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _storage: Storage | null = null;
  deviceInfo: DeviceInfo;

  constructor(private http: HttpClient,
    private deviceDetectorService: DeviceDetectorService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    if (this.deviceInfo.os !== 'iOS' && this.deviceInfo.os !== 'Android') {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Atención!',
        message: `Estás entrando desde un dispositivo para el cual no está desarrolada esta plataforma. Por favor entra desde tu dispositivo móvil.`,
        buttons: [
          {
            text: 'Entendido',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.router.navigate(['error']);
              
            }
          }
        ]
      });
  
      alert.present();
    }
    const storage = await this.storage.create();
    this._storage = storage;
  }

  login(email: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}ddp_users/`, {user: {email, username: email}});
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}users/`);
  }

  getUser(pk: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}ddp_users/${pk}/`);
  }

  async getLocalUser(): Promise<any> {
    console.log('Trying to get localUser');
    const pk = await this.storage.get('pk');
    if (pk) {
      const angularShape = await this.storage.get('angularShape');
      const email = await this.storage.get('email');
      const cartPk = await this.storage.get('cartPk');
      console.log({ email, pk, angularShape });
      return { email, pk, angularShape, cartPk };
    }
    return;
  }

  async getTransaction(): Promise<string> {
    const t: string = await this.storage.get('t');
    return t;
  }

  async setLocalUser(u: any) {
    u.angularShape = u.shape === 'Angular';
    await this.set('email', u.user.email);
    await this.set('angularShape', u.angularShape)
    await this.set('pk', u.pk);
    await this.set('cartPk', u.cartPk);
  }

  public async set(key: string, value: any) {
    console.log("Storage - ", key, value);
    await this._storage?.set(key, value);
  }

  public async clear() {
    await this.storage.clear();
  }

}
