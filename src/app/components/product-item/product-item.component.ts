import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-product-item',
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.scss'],
})
export class ProductItemComponent extends ListItemComponent {
}
