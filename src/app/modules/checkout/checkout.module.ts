import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutPage } from './checkout.page';
import { SharedModule } from '../../shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CheckoutPage }])
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
