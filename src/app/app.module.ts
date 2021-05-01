import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LoginPageModule } from './modules/login/login.module';
import { MenuPage } from './modules/menu/menu.page';
import { MenuPageModule } from './modules/menu/menu.module';
import { CheckoutPageModule } from './modules/checkout/checkout.module';
import { ErrorPageModule } from './modules/error/error.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    RouterModule,
    LoginPageModule,
    MenuPageModule,
    CheckoutPageModule,
    ErrorPageModule,
    HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
