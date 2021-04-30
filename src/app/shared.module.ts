import { NgModule } from "@angular/core";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ListItemComponent } from "./components/list-item/list-item.component";

@NgModule({
  imports: [

  ],
  exports: [
    ProductItemComponent,
    ListItemComponent
  ],
  entryComponents: [
    ProductItemComponent,
    ListItemComponent
  ],
  declarations: [ProductItemComponent, ListItemComponent]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
