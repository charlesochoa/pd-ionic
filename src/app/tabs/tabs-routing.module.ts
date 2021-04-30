import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('../modules/menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('../modules/checkout/checkout.module').then(m => m.CheckoutPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
